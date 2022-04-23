var express = require('express');
var router = express.Router();
var ContatoController = require('../controllers/ContatoController')
var EstudantesController = require('../controllers/EstudantesController')
var IndexController = require('../controllers/IndexController')

/* GET home page. */
router.get('/index', function (req, res, next) {
  res.render('index', { title: 'Express - Jonatas' });
});

router.get('/contato', ContatoController.index)
router.get('/estudantes', EstudantesController.index)
router.get('/indexView', IndexController.viewIndex)
router.get('/confirmation', IndexController.confirmation)

module.exports = router;
