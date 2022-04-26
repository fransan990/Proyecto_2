const router = require("express").Router()
const Ingredient = require('../models/Ingredient.model')


//Create

router.get('/create', (req, res) => {
    res.render('ingredient/createIngredient')
})

router.post('/create', (req, res) => {

    const { name, kcal, protein, fat, carbs } = req.body

    Ingredient
        .create({ name, kcal, protein, fat, carbs })
        .then(() => {
            res.redirect('/ingredient/list')
        })
        .catch(err => {
            console.log(err)
            res.render('ingredient/createIngredient')
        })
})

//list 

router.get('/list', (req, res) => {

    Ingredient
        .find()
        .then(ingredients => {
            res.render('recipe/listRecipe', { ingredients })
        })
        .catch(err => console.log(err))
})


//edit

router.get('/:id/edit', (req, res) => {

    const { id } = req.params

    Ingredient
        .findById(id)
        .then(ingredient => {
            res.render('ingredient/editIngredient', ingredient)
        })
        .catch(err => console.log(err))
})

router.post('/:id/edit', (req, res) => {

    const { id } = req.params
    const { name, kcal, protein, fat, carbs } = req.body

    Ingredient
        .findByIdAndUpdate(id, { name, kcal, protein, fat, carbs })
        .then(() => {
            res.redirect('/ingredient/list')
        })
        .catch(err => console.log(err))
})

router.post('/:id/delete', (req, res) => {

    const { id } = req.params

    Ingredient
        .findByIdAndDelete(id)
        .then(() => {
            res.redirect('/ingredient/list')
        })
        .catch(err => console.log(err))
})


module.exports = router