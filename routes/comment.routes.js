const router = require("express").Router();
const app = require("../app");
const Comment = require('../models/Comment.model');
const { route } = require("./index.routes");


//edit comment

// res.send('holi')
router.get('/:id/edit', (req, res) => {
    const { id } = req.params

    Comment
        .findById(id)
        .then(comment => {
            res.render('comment/editComment', comment)
        })
        .catch(err => console.log(err))
})

router.post('/:id/edit', (req, res) => {
    const { id } = req.params
    const { description } = req.body

    Comment
        .findByIdAndUpdate(id, { description })
        .then(() => {
            res.redirect('/recipe/listRecipe')
        })
        .catch(err => console.log(err))
})

//delete comment

router.post('/:id/delete', (req, res) => {
    const { id } = req.params

    Comment
        .findByIdAndDelete(id)
        .then(() => {
            res.redirect('/recipe/listRecipe')
        })
        .catch(err => console.log(err))
})
module.exports = router