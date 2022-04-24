const fs = require('fs')
const path = require('path')
const bcrypt = require('bcrypt')

let usuarioJson = path.join("usuarios.json")

// Chamadas da login page
let UsuarioController = {
    registroForm: (req, res) => {
        res.render("registroUsuario.ejs")
    },
    salvarForm: (req, res) => {
        let { nome, email, senha } = req.body
        let senhaC = bcrypt.hashSync(senha, 12)
        let usuario = JSON.stringify({ nome, email, senha: senhaC })
        fs.writeFileSync(usuarioJson, usuario)
        res.send(`Usuario cadastrado com sucesso`)
    },
    loginForm: (req, res) => {
        res.render("login.ejs")
    },
    loginUsuario: (req, res) => {
        let { email, senha } = req.body
        let usuarioSalvo = fs.readFileSync(usuarioJson, { encoding: 'utf-8' })
        usuarioSalvo = JSON.parse(usuarioSalvo)

        if (email != usuarioSalvo.email) {
            return res.send('Usuario invalido')
        }
        if (!bcrypt.compareSync(senha, usuarioSalvo.senha)) {
            return res.send('Usuário ou senha invalida')
        }

        res.redirect('/loja')
    }
}

module.exports = UsuarioController