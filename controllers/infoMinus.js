const CatMinus = require('../models/categoryMinus');
const Account = require('../models/account');
const CatPlus = require('../models/categoryPlus');
const InfoMinus = require('../models/infoMinus')


const { ERR_MSG } = require('../utils/constants');

const {
  BadRequestErr,
  NotFoundErr,
} = require('../errors/index');


const createInfoMinus = (req, res, next) => {
  const owner = req.user._id;
  const { 
      titleAccount, 
      catMinus, 
      date, 
      summ, 
      description } = req.body;

      InfoMinus.create({ // создаём инфо о расходе
        account: titleAccount,
        catMinus: catMinus,
        owner: owner,
        date: date,
        summ: summ,
        description: description
      })
      .then((data) => { // если ответ положительный, ищем счёт по названию и создателю 
        const newSumm = data.summ;
        Account.findOne({ title: titleAccount, owner: owner })
          .then((data) => { // если нашли
            const bigSumm = data.summ - newSumm;
            Account.findOneAndUpdate({ title: titleAccount, owner: owner }, { summ: bigSumm }, { new: true }) 
            .then((data) => {
              res.send(data)
            })
          })
      })
      .catch(() => {
        throw new BadRequestErr(ERR_MSG.BAD_REQUEST);
      })
}


      //получаем информацию в диапазоне дат 
      //формат запроса:
//        {
//        "dateStart": "2022.01.01",
//        "dateOwer": "2022.10.24"
//        }
const getAnyData = (req, res, next) => {
  const owner = req.user._id;
  const {
    dateStart,
    dateOwer
  } = req.body
  InfoMinus.find({ date: { $gte: new Date(dateStart), $lt: new Date(dateOwer) }, owner: owner })
  .then((data) => {
    res.send(data)})
  .catch(() => {
    throw new BadRequestErr(ERR_MSG.BAD_REQUEST)
  })
}


//Получаем всю информацию о расходах.
const getAllcategories = (req, res, next) => {
    const owner = req.user._id;
    InfoMinus.find({ owner })
      .orFail(() => {
        throw new NotFoundErr(ERR_MSG.NOT_FOUND);
      })
      .then((data) => res.send(data))
      .catch(next);
}
module.exports = {
    getAllcategories,
    createInfoMinus,
    getAnyData
}