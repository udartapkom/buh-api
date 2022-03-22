const Account = require('../models/account');
const CatPlus = require('../models/categoryPlus');
const InfoPlus = require('../models/infoPlus')


const { ERR_MSG } = require('../utils/constants');

const {
  BadRequestErr,
  NotFoundErr,
} = require('../errors/index');

const createInfoPlus = (req, res, next) => {
  const owner = req.user._id;
  const { 
      titleAccount, 
      catPlus, 
      date, 
      summ, 
      description } = req.body;

      InfoPlus.create({ // создаём инфо о доходе
        account: titleAccount,
        catPlus: catPlus,
        owner: owner,
        date: date,
        summ: summ,
        description: description
      })
      .then((data) => { // если ответ положительный, ищем счёт по названию и создателю 
        const newSumm = data.summ;
        Account.findOne({ title: data.account, owner: owner })
          .then((data) => { // если нашли
            const bigSumm = data.summ + newSumm;
            Account.findByIdAndUpdate({ title: data.account, owner: owner }, { summ: bigSumm }, { new: true }) 
            .then((data) => {
              res.send(data)
            })
          })
      })
      .catch(() => {
        throw new BadRequestErr(ERR_MSG.BAD_REQUEST);
      })
}




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
    console.log(data)
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

//Получаем всю информацию о доходах.
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
    createInfoPlus
}
