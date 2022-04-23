var express = require('express')
var router = express.Router()
var HomeController = require('../controllers/HomeController')

// Chamada para a home page (tela inicial)
router.get('/', HomeController.homePage)

module.exports = router