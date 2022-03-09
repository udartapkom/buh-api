const Account = require('../models/account');
const { ERR_MSG } = require('../utils/constants');

const {
  BadRequestErr,
} = require('../errors/index');

//Создаём счёт
const createAccount = (req, res, next) => {
  const { title } = req.body;
  const owner = req.user._id;
  if (!title) {
    throw new BadRequestErr(ERR_MSG.BAD_REQUEST);
  }
  Account.create({
    title,
    owner,
  })
    .then((account) => {
      Account.findById(account._id).then((data) => res.send(data));
    })
    .catch((err) => {
      throw new BadRequestErr(ERR_MSG.BAD_REQUEST);
    });
};
// Обновляем сумму на счёте пользователя
const updateSumm = (req, res, next) => {
  const owner = req.user._id;
  const { title, summ } = req.body;
  if (!title || !summ) {
    throw new BadRequestErr(ERR_MSG.BAD_REQUEST);
  }
  Account.findOneAndUpdate({ title: title, owner: owner }, { summ }, { new: true })
    .then((summ) => {
      res.send(summ);
    })
    .catch(() => {
      throw new BadRequestErr(ERR_MSG.BAD_REQUEST);
    });
};

module.exports = {
    createAccount,
    updateSumm
}