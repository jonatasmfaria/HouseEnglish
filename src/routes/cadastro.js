var express = require('express')
var router = express.Router()
var CadastroController = require('../controllers/CadastroController')

// Chamada para a loja page (tela de produtos)
router.get('/', CadastroController.cadastroPage)

module.exports = router