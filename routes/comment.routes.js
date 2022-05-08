const router = require("express").Router();
const app = require("../app");
const Comment = require('../models/Comment.model');

const { isLoggedOut, isLoggedIn, checkRole } = require('./../middleware/route-guard')

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

router.post('/:id/delete', checkRole("Admin"), (req, res) => {
    const { id } = req.params

    Comment
        .findByIdAndDelete(id)
        .then((deletedComment) => {
            console.log('HE BORRADO UN COMENTARIO')
            res.redirect(`/recipe/${deletedComment.recipe._id}/details`)
        })
        .catch(err => console.log(err))
})
module.exports = router