const isLoggedIn = (req, res, next) => {
    req.session.currentUser ? next() : res.render('user/login', { errorMessage: 'Inicia sesión para acceder' })
}

const checkRole = (...rolesToCheck) => (req, res, next) => {
    if (rolesToCheck.includes(req.session.currentUser.roles)) {
        next()
    } else {
        res.render('user/login', { errorMessage: 'No tienes permisos' })
    }
}

const isLoggedOut = (req, res, next) => {
    req.session.currentUser ? res.redirect('/') : next()
}

module.exports = { isLoggedIn, isLoggedOut, checkRole }

