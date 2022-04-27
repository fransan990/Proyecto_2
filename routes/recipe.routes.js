const router = require("express").Router();

const User = require('../models/User.model')
const Comment = require('../models/Comment.model')
const Recipe = require('../models/Recipe.model')
const Ingredient = require('../models/Ingredient.model');





router.get("/details", (req, res, next) => {
    // res.send("detalles")

    //id para los comentarios

    // res.send(req.session.currentUser._id)
    const { _id } = req.session.currentUser;

    const promises = [User.findById(_id), Comment.find().populate("owner")]

    Promise
        .all(promises)
        .then(([user, comments]) => {
            res.render('recipe/detailsRecipe', { user, comments })
        })
        .catch(err => console.log(err))

});

router.post("/details", (req, res, next) => {
    // res.send(req.body)
    // res.send(req.session.currentUser._id)
    const { _id } = req.session.currentUser;
    const { description } = req.body

    Comment
        .create({ owner: _id, description })
        .then(() => {
            res.redirect(`/recipe/details`)
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

router.post('/create', (req, res) => {

    const { _id } = req.session.currentUser
    const { name, image, owner, category, ingredients, preparation, restaurant } = req.body

    Recipe
        .create({ name, image, owner: _id, category, ingredients, preparation, restaurant })
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
router.get('/:id/delete', (req, res) => {
    res.send('jolaaa')
})
















// //delete recipe

// router.get('/:id/delete', (req, res) => {
//     const { _id } = req.params


//     Recipe
//         .findByIdAndDelete(_id)
//         .then(() => {
//             res.redirect('Recipe/listRecipe')
//         })
//         .catch(err => console.log(err))
// })




module.exports = router;