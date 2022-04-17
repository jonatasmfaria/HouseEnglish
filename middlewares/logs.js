const fs = require('fs')

function log (req, res, next){
fs.appendFileSync('log.txt', "Usuário entrou na url:" + req.url)
    next()
}

module.exports = log