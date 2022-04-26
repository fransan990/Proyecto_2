const router = require("express").Router();

const User = require('../models/User.model')
const Comment = require('../models/Comment.model')
const Recipe = require('../models/Recipe.model')



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



module.exports = router;