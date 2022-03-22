const Account = require('../models/account');
const { ERR_MSG } = require('../utils/constants');

const {
  BadRequestErr,
} = require('../errors/index');

//Создаём счёт
const createAccount = (req, res, next) => {
  console.log(req)
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
// Получаем список счетов
const getAccounts = (req, res, next) => {
  const owner = req.user._id;
  Account.find({ owner })
    .orFail(() => {
      throw new NotFoundErr(ERR_MSG.NOT_FOUND);
    })
    .then((data) => res.send(data))
    .catch(next);
};

// обновление cчёта
const updateAccount = (req, res, next) => {
  const owner = req.user._id;
  const { title, newTitle } = req.body;
  if (!title || !newTitle) {
    throw new BadRequestErr(ERR_MSG.BAD_REQUEST);
  }
  Account.findOneAndUpdate({ title: title, owner: owner }, { title: newTitle }, { new: true })
    .then((account) => {
      res.send(account);
    })
    .catch(() => {
      throw new BadRequestErr(ERR_MSG.BAD_REQUEST);
    });
};

//удаление счёта
const deleteAccount = (req, res, next) => {
  const owner = req.user._id;
  const { title } = req.body;
  if (!title) {
    throw new BadRequestErr(ERR_MSG.BAD_REQUEST);
  }
  Account.findOneAndDelete({ title: title, owner: owner })
    .then((account) => {
      res.send(account);
    })
    .catch(() => {
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
    updateSumm,
    getAccounts,
    updateAccount,
    deleteAccount
}