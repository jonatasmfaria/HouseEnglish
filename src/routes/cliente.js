var express = require('express')
var router = express.Router()
var ClienteController = require('../controllers/ClienteController')

// Chamada para a loja page (tela de produtos)
router.get('/', ClienteController.viewCliente)
router.post('/criar', ClienteController.cadastroCliente)

module.exports = router