const router = require("express").Router()
const req = require("express/lib/request")
const Ingredient = require('../models/Ingredient.model')
const Recipe = require('../models/Recipe.model')


// create recipe

router.get('/create', (req, res) => {

    Ingredient
        .find()
        .then(ingredient => {
            res.render('Recipe/createRecipe', { ingredient })
        })
        .catch(err => console.log(err))
})

router.post('/create', (req, res) => {

    const { _id } = req.session.currentUser
    const { name, image, owner, category, ingredients, preparation, restaurant } = req.body

    Recipe
        .create({ name, image, owner, category, ingredients, preparation, restaurant, owner: _id })
        .then(() => {
            res.redirect('/Recipe/listRecipe')
        })
        .catch(err => {
            console.log(err)
        })
})

//recipe list

router.get('/listRecipe', (req, res) => {
    // res.send('holaaa')

    Recipe
        .find()
        .then(recipe => {
            res.render('Recipe/listRecipe', { recipe })
        })
        .catch(err => console.log(err))
})







module.exports = router;