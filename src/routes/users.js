var express = require('express');
const logDB = require('../../middlewares/logDB');
var router = express.Router();
var UsersController = require('../controllers/UsersController')
var { check, validationResult, body } = require('express-validator')
//var logDBMiddleware = require('../../middlewares/logDB');

router.get('/criar', UsersController.viewForm)
router.post('/criar', logDB, [
  check('email').notEmpty().withMessage("O campo de e-mail não deve ser vazio."),
  check('password').isNumeric({ min: 6 }).withMessage("O campo de senha não deve ser vazio e deve conter no mínimo 6 digitos."),
], UsersController.salvarForm)
router.get('/sucesso', logDB, UsersController.sucesso)

module.exports = router;
