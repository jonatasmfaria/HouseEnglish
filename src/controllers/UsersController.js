var {check, validationResult, body} = require('express-validator')
const UsersController = {
    viewForm: (req, res) => {
        let objError = validationResult(req)
        console.log(objError)
        if(objError.isEmpty()){
            //teste
        }else {
            res.render('users.ejs', {listaDeErrors:objError.errors})
        }
        return res.render("users.ejs")
    },
    salvarForm: (req, res) => {
        //console.log(req.body)
        let objError = validationResult(req)
        console.log(objError)
        if(objError.isEmpty()){
            let { email, password } = req.body
            //res.send(`O corpo da mensagem foi email: ${email} de pass: ${password}`)
            res.redirect('/users/sucesso')
        }else {
            res.render('users.ejs', {listaDeErrors:objError.errors})
        }
    },
    sucesso: (req, res)=>{
        return res.render("sucesso.ejs")
    },
}

module.exports = UsersController