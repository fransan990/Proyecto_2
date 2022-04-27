const router = require("express").Router();
const bcrypt = require('bcryptjs')
const saltRounds = 10

const User = require("../models/User.model")
const Recipe = require('../models/Recipe.model')

const { isLoggedOut } = require('./../middleware/route-guard')


router.get('/registro', (req, res, next) => {
    res.render('user/signup')
})

router.post('/registro', (req, res, next) => {
    // res.send("funciona")
    // const { password } = req.body
    const { username, password, email, telephone } = req.body

    bcrypt
        .genSalt(saltRounds)
        .then(salt => bcrypt.hash(password, salt))
        .then(hashedPassword => User.create({ username, password: hashedPassword, email, telephone }))
        .then(() => res.redirect('/'))
        .catch(error => next(error))
})

router.get('/inicio-sesion', isLoggedOut, (req, res) => {
    res.render('user/login')
    // res.send("login")
})

router.post('/inicio-sesion', isLoggedOut, (req, res, next) => {

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
            res.redirect('/')
        })
        .catch(error => next(error));
})

router.post('/cerrar-sesion', (req, res, next) => {
    req.session.destroy(() => res.redirect('/user/inicio-sesion'))
})


//listar recetas propias

router.get('/listaReceta', (req, res, next) => {

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
    // res.send("hola")

    const { id } = req.params
    const { _id } = req.session.currentUser

    User
        .findByIdAndUpdate(_id, { $push: { favRecipes: id } })
        .then(() => {
            res.redirect("/")
        })
        .catch(error => next(error))
})

//Eliminar Receta fav
router.post('/:id/recipeFav/delete', (req, res, next) => {
    // res.send("eliminar")

    const { id } = req.params
    const { _id } = req.session.currentUser

    User
        .findByIdAndUpdate(_id, { $pull: { favRecipes: id } })
        .then(() => {
            res.redirect("/user/listaReceta")
        })
        .catch(error => next(error))
})

module.exports = router;