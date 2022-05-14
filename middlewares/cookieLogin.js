const { Cliente } = require('../models')

async function cookieLogin(req, res, next) {
    if (req.cookies.logado != undefined && req.session.usuario == null) {
        let email = req.cookies.logado

        let usuarioSalvo = await Cliente.findOne({ where: { email: email } })

        if (usuarioSalvo.email == email) {
            req.session.usuario = usuarioSalvo
        }
    }
    next()
}

module.exports = cookieLogin