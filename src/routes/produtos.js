var express = require('express');
var router = express.Router();
var ProdutosController = require('../controllers/ProdutosController')

router.get('/criar', ProdutosController.viewForm)
router.post('/criar', ProdutosController.salvarForm)
router.get('/sucesso', ProdutosController.sucesso)
router.get('/:id/editar', ProdutosController.viewAttForm)
router.put('/editar', ProdutosController.editar)
router.get('/', ProdutosController.listarProdutos)
router.delete('/deletar/:id', ProdutosController.deletarProduto)

module.exports = router;
