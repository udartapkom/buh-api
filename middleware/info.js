const getData = require('../controllers/general')


const info = (req, res, next) => {
console.log(req.body)
next()
}

module.exports = {info}