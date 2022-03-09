const CatMinus = require('../models/categoryMinus');
const Account = require('../models/account');
const CatPlus = require('../models/categoryPlus');

const { ERR_MSG } = require('../utils/constants');

const {
  BadRequestErr,
  ConflictErr,
  NotFoundErr,
} = require('../errors/index');

const getData = (req, res, next) => {
    const owner = req.user._id
    const {
        titleAccount,
        catMinus,
    } = req.body

const accountID = Account.findOne({title: titleAccount, owner: owner})
const categoryID = CatMinus.findOne({title: catMinus, owner: owner})
accountID.then((data) => {
    console.log(data._id)
    })
categoryID.then((data) => {
    console.log(data._id)
})

.catch((err) => {
    console.log(err)
})




}
module.exports = {getData}