const router = require("express").Router();
const bcrypt = require('bcryptjs')
const User = require("../models/User.model")
const saltRounds = 10

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





module.exports = router;