var express = require('express')
var router = express.Router()
var LojaController = require('../controllers/LojaController')

// Chamada para a loja page (tela de produtos)
router.get('/', LojaController.lojaPage)

module.exports = router