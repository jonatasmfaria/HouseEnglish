var express = require('express')
var router = express.Router()
var UsuarioController = require('../controllers/UsuarioController')

// Chamada para a loja page (tela de produtos)
router.get('/', UsuarioController.index)
router.get('/criar', UsuarioController.registroForm)
router.post('/criar', UsuarioController.salvarForm)

router.get('/login', UsuarioController.loginForm)
router.post('/login', UsuarioController.loginUsuario)

module.exports = router