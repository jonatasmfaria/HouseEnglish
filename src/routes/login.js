var express = require('express')
var router = express.Router()
var LoginController = require('../controllers/LoginController')

// Chamada para a loja page (tela de produtos)
router.get('/', LoginController.loginPage)

module.exports = router