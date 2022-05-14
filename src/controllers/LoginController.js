const { Cliente } = require('../../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const bcrypt = require('bcrypt')
// Chamadas da login page
const LoginController = {
    loginPage: (req, res) => {
        return res.render("login.ejs")
    },
    sucesso: async (req, res) => {
        let { email, senha, logado } = req.body;
        let usuarioSalvo = await Cliente.findOne({ where: { email: `${email}` } });
        req.session.usuario = usuarioSalvo
        if (usuarioSalvo != undefined) {
            if (usuarioSalvo.email === email && bcrypt.compareSync(senha, usuarioSalvo.senha)) {
                if (logado != undefined) {
                    res.cookie('logado', usuarioSalvo.email, { maxAge: 90000000 })
                }
                return res.redirect('/')
            }
        } else {
            return res.send('Email ou senha invalida!')
        }
    }
}

module.exports = LoginController