var express = require('express')
var router = express.Router()
var AtualizarController = require('../controllers/AtualizarController')

// Chamada para a loja page (tela de produtos)
router.get('/:id/buscar', AtualizarController.buscar)
router.put('/update', AtualizarController.update)
router.delete('/deletar/:id', AtualizarController.delete)

module.exports = router