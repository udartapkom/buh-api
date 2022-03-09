const getData = require('../controllers/general')


const info = (req, res, next) => {
getData(req)
}

module.exports = {info}