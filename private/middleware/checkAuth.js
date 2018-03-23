module.exports = function (req, res, next) {
    if ( req.session.passport.user === 'Admin'){
        next()
    } else {
        res.status(403).send('Must be Admin to access')
    }
}