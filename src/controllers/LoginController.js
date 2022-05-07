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
        let { email, senha } = req.body;
        let senhaBD = await Cliente.findOne({ where: { email: `${email}` } });
        if (senhaBD != undefined) {
            if (senhaBD.email === email && bcrypt.compareSync(senha, senhaBD.senha)) {
                return res.send('Sucesso FIIII!')
            }
        } else {
            return res.send('Email ou senha invalida!')
        }
    }
}

module.exports = LoginController