const router = require("express").Router();

const User = require('../models/User.model')
const Comment = require('../models/Comment.model')
const Recipe = require('../models/Recipe.model')
const Ingredient = require('../models/Ingredient.model');


const fileUploader = require("../config/cloudinary.config")


router.get("/:id/details", (req, res, next) => {
    // res.send("detalles")
    //id para los comentarios
    // res.send(req.session.currentUser._id)

    const { _id } = req.session.currentUser;
    const { id } = req.params;

    //lo puto mejor que tenemos gracias INES <3

    const promises = [User.findById(_id), Comment.find({ recipe: id }).populate("owner"), Recipe.findById(id)]

    Promise
        .all(promises)
        .then(([user, comments, recipe]) => {
            console.log(recipe)
            res.render('recipe/detailsRecipe', { user, comments, recipe })
        })
        .catch(err => console.log(err))

});


//create comment


router.post("/:id/details", (req, res, next) => {
    // res.send(req.body)
    // res.send(req.session.currentUser._id)
    const { _id } = req.session.currentUser;
    const { description } = req.body
    const { id } = req.params

    Comment
        .create({ owner: _id, recipe: id, description })
        .then(() => {
            res.redirect(`/recipe/${id}/details`)
        })
        .catch(err => console.log(err))

});

// create recipe

router.get('/create', (req, res) => {

    Ingredient
        .find()
        .then(ingredient => {
            res.render('Recipe/createRecipe', { ingredient })
        })
        .catch(err => console.log(err))
})

router.post('/create', fileUploader.single('image'), (req, res) => {

    const { _id } = req.session.currentUser
    const { name, owner, category, ingredients, preparation, restaurant } = req.body
    const { path } = req.file
    console.log(req.file)
    console.log(req)
    console.log(path)

    Recipe
        .create({ name, image: path, owner: _id, category, ingredients, preparation, restaurant, })
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
            res.render('recipe/listRecipe', { recipe })
        })
        .catch(err => console.log(err))
})


//edit recipe

router.get('/:id/edit', (req, res) => {
    const { id } = req.params

    // res.send('holaaa')

    Recipe
        .findById(id)
        .populate('ingredients')
        .then(newRecipe => {
            res.render('recipe/editRecipe', newRecipe)

        })
        .catch(err => console.log(err))
})

router.post('/:id/edit', (req, res) => {

    // res.send('holaaa')
    const { id } = req.params
    const { name, image, owner: _id, category, ingredients, preparation, restaurant } = req.body

    console.log(req.body)

    Recipe
        .findByIdAndUpdate(id, { name, image, owner: _id, category, ingredients, preparation, restaurant })
        .then(() => {
            res.redirect('/Recipe/listRecipe')
        })
        .catch(err => console.log(err))
})


//delete recipe

router.post('/:id/delete', (req, res) => {

    const { id } = req.params

    Recipe
        .findByIdAndDelete(id)
        .then(() => {
            res.redirect('/Recipe/listRecipe')
        })
        .catch(err => console.log(err))
})





module.exports = router;