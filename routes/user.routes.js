const router = require("express").Router();
const bcrypt = require('bcryptjs')
const saltRounds = 10

const User = require("../models/User.model")
const Recipe = require('../models/Recipe.model')

const { isLoggedOut, isLoggedIn } = require('./../middleware/route-guard')


router.get('/signup', (req, res, next) => {
    res.render('user/signup')
})

router.post('/signup', (req, res, next) => {

    const { username, password, email, telephone } = req.body

    bcrypt
        .genSalt(saltRounds)
        .then(salt => bcrypt.hash(password, salt))
        .then(hashedPassword => User.create({ username, password: hashedPassword, email, telephone }))
        .then(() => res.redirect('/'))
        .catch(error => next(error))
})

router.get('/login', isLoggedOut, (req, res) => {

    res.render('user/login')


})

router.post('/login', isLoggedOut, (req, res, next) => {

    const { username, password } = req.body

    if (username.length === 0 || password.length === 0) {
        res.render('user/login', { errorMessage: 'Rellena todos los campos' })
        return
    }

    User
        .findOne({ username })
        .then(user => {
            if (!user) {
                res.render('user/login', { errorMessage: 'Usuario no reconocido' })
                return
            }

            if (!bcrypt.compareSync(password, user.password)) {
                res.render('user/login', { errorMessage: 'Contraseña no válida' })
                return
            }

            req.session.currentUser = user
            req.app.locals.isLogged = true

            res.redirect('/')
        })
        .catch(error => next(error));
})

router.post('/loggedOut', (req, res, next) => {
    req.app.locals.isLogged = false
    req.session.destroy(() => res.redirect('/user/login'))
})

//About
router.get('/about', (req, res) => {
    res.render("about")
})

//listar recetas propias
router.get('/listRecipeOwn', isLoggedIn, (req, res, next) => {

    const { _id } = req.session.currentUser
    const promises = [Recipe.find({ owner: _id }), User.findById(_id).populate("favRecipes")]

    Promise
        .all(promises)
        .then(([recipes, user]) => {

            console.log(recipes)
            console.log(user)

            res.render('user/ownlistRecipe', { recipes, user })
        })
        .catch(error => next(error))
})

//receta guardada
router.post('/:id/recipeFav', (req, res, next) => {

    const { id } = req.params
    const { _id } = req.session.currentUser

    User
        .findByIdAndUpdate(_id, { $push: { favRecipes: id } })
        .then(() => {
            res.redirect("/user/listRecipeOwn")
        })
        .catch(error => next(error))
})

//Eliminar Receta fav
router.post('/:id/recipeFav/delete', (req, res, next) => {

    const { id } = req.params
    const { _id } = req.session.currentUser

    User
        .findByIdAndUpdate(_id, { $pull: { favRecipes: id } })
        .then(() => {
            res.redirect("/user/listRecipeOwn")
        })
        .catch(error => next(error))
})

module.exports = router;