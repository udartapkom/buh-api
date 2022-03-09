const Account = require('../models/account');
const CatPlus = require('../models/categoryPlus');
const InfoPlus = require('../models/infoPlus')


const { ERR_MSG } = require('../utils/constants');

const {
  BadRequestErr,
  NotFoundErr,
} = require('../errors/index');
// Функция пишет в модель infoMinus кучу айдишников, 
//потом нужно по этим ID делать запросы с фронта, чтобы получить категории, счета и создателя...
const getData = (req, res, next) => {
  const owner = req.user._id;
  const { 
      titleAccount, 
      catPlus, 
      date, 
      summ, 
      description } = req.body;
  const infoPlusObj = {
    owner: owner,
    date: date,
    summ: summ,
    description: description,
  };
  const accountID = Account.findOne({ title: titleAccount, owner: owner });
  const categoryID = CatPlus.findOne({ title: catPlus, owner: owner });
  accountID.then((data) => {
      infoPlusObj.account = data.title;
  });
  categoryID
    .then((data) => {
      infoPlusObj.catPlus = data.title;
      InfoPlus.create(infoPlusObj).then((data) => {
        res.send(data);
      });
    })
    .catch(() => {
      throw new BadRequestErr(ERR_MSG.BAD_REQUEST);
    });
};

//Получаем всю информацию о расходах.
const getAllcategories = (req, res, next) => {
    const owner = req.user._id;
    InfoPlus.find({ owner })
      .orFail(() => {
        throw new NotFoundErr(ERR_MSG.NOT_FOUND);
      })
      .then((data) => res.send(data))
      .catch(next);
}
module.exports = {
    getData,
    getAllcategories,
}