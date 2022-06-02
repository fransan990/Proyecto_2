const router = require("express").Router();

const User = require('../models/User.model')
const Comment = require('../models/Comment.model')
const Recipe = require('../models/Recipe.model')
const Ingredient = require('../models/Ingredient.model');


const fileUploader = require("../config/cloudinary.config")

const { isLoggedOut, isLoggedIn, checkRole } = require('./../middleware/route-guard')


router.get("/:id/details", isLoggedIn, (req, res, next) => {

    const { _id } = req.session.currentUser;
    const { id } = req.params;
    const isAdmin = req.session.currentUser.roles == 'Admin'

    const promises = [
        User.findById(_id),
        Comment.find({ recipe: id }).populate("owner"),
        Recipe.findById(id).populate("ingredients")
    ]

    Promise
        .all(promises)
        .then(([user, comments, recipe]) => {
            console.log(recipe)
            res.render('recipe/detailsRecipe', { user, comments, recipe, isAdmin })
        })
        .catch(error => next(error))

});

//Comentario
//Crear comentario
router.post("/:id/details", isLoggedIn, (req, res, next) => {

    const { _id } = req.session.currentUser;
    const { description } = req.body
    const { id } = req.params

    Comment
        .create({ owner: _id, recipe: id, description })
        .then(() => {
            res.redirect(`/recipe/${id}/details`)
        })
        .catch(error => next(error))

});

// Crear receta | Ingrediente
router.get('/create', (req, res) => {

    Ingredient
        .find()
        .then(ingredient => {
            res.render('Recipe/createRecipe', { ingredient })
        })
        .catch(error => next(error))
})

router.post('/create', fileUploader.single('image'), (req, res) => {

    const { _id } = req.session.currentUser
    const { name, owner, category, ingredients, preparation, latitud, longitud } = req.body
    const { path } = req.file

    const location = {
        type: 'Point',
        coordinates: [latitud, longitud]
    }

    Recipe
        .create({ name, image: path, owner: _id, category, ingredients, preparation, restaurant: { location } })
        .then(() => {
            res.redirect('/Recipe/listRecipe')
        })
        .catch(error => next(error))
})

//Lista de recetas
router.get('/listRecipe', isLoggedIn, (req, res, next) => {

    const isAdmin = req.session.currentUser.roles === "Admin"

    Recipe
        .find()
        .then(recipe => {
            res.render('recipe/listRecipe', { recipe, isAdmin })
        })
        .catch(error => next(error))
})

//Buscadorr de recetas
router.get('/listRecipeShe', isLoggedIn, (req, res, next) => {

    const { form } = req.query

    Recipe
        .find({ category: { $regex: '.*' + form + '.*', $options: "i" } })
        .then(recipe => {
            res.render('recipe/listRecipe', { recipe })
        })
        .catch(error => next(error))
})

//Editar receta
router.get('/:id/edit', (req, res) => {

    const { id } = req.params

    Recipe
        .findById(id)
        .populate('ingredients')
        .then(newRecipe => {
            res.render('recipe/editRecipe', newRecipe)

        })
        .catch(error => next(error))
})

router.post('/:id/edit', (req, res) => {

    const { id } = req.params
    const { name, image, owner: _id, category, ingredients, preparation, restaurant } = req.body

    Recipe
        .findByIdAndUpdate(id, { name, image, owner: _id, category, ingredients, preparation, restaurant })
        .then(() => {
            res.redirect('/Recipe/listRecipe')
        })
        .catch(error => next(error))
})

//Eliminar receta
router.post('/:id/delete', (req, res) => {

    const { id } = req.params

    Recipe
        .findByIdAndDelete(id)
        .then(() => {
            res.redirect('/Recipe/listRecipe')
        })
        .catch(err => console.log(err))
})

//Boton de like de recetas 
router.post('/:id/like', (req, res) => {

    const { id } = req.params

    Recipe
        .findByIdAndUpdate(id, { $inc: { like: 1 } })
        .then(like => {
            res.redirect('/recipe/listRecipe')
        })
        .catch(error => next(error))
})

module.exports = router;