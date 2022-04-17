const fs = require('fs')

function logDB (req, res, next){
fs.appendFileSync('logdb.txt', "\nFoi criado um registro na url:" + req.url)
    next()
}

module.exports = logDB