const CatPlus = require('../models/categoryPlus');
const { ERR_MSG } = require('../utils/constants');

const {
    BadRequestErr,
    ConflictErr,
  } = require('../errors/index');

  //Создаём категорию доходов
const createCategoryPlus = (req, res, next) => {
  const { title } = req.body;
  const owner = req.user._id;
  if (!title) {
    throw new BadRequestErr(ERR_MSG.BAD_REQUEST);
  }
  CatPlus.findOne({ title: title, owner: owner })
    .then((data) => {
      if (!data) {
        CatPlus.create({
          title,
          owner,
        }).then((cat) => {
            CatPlus.findById(cat._id).then((data) => res.send(data));
        });
        return;
      }
      throw new ConflictErr(ERR_MSG.CATEGORY_CONFLICT);
    })
    .catch((err) => {
      if (err.statusCode === 409) {
        throw new ConflictErr(ERR_MSG.CATEGORY_CONFLICT);
      }
      throw new Error(ERR_MSG.SERVER_ERROR);
    })
    .catch(next);
};
// обновление категории доходов
  const updateCategory = (req, res, next) => {
    const owner = req.user._id;
    const { title, newTitle } = req.body;
    if (!title || !newTitle) {
      throw new BadRequestErr(ERR_MSG.BAD_REQUEST);
    }
    CatPlus.findOneAndUpdate({ title: title, owner: owner }, { title: newTitle }, { new: true })
      .then((cat) => {
        res.send(cat);
      })
      .catch(() => {
        throw new BadRequestErr(ERR_MSG.BAD_REQUEST);
      });
  };

  // удалить категорию доходов
  const deleteCategory = (req, res, next) => {
    const owner = req.user._id;
    const { title } = req.body;
    if (!title) {
        throw new BadRequestErr(ERR_MSG.BAD_REQUEST);
      }
      CatPlus.findOneAndDelete({ title: title, owner: owner })
      .then((cat) => {
        res.send(cat);
      })
      .catch(() => {
        throw new BadRequestErr(ERR_MSG.BAD_REQUEST);
      });
  }

  module.exports = {
      createCategoryPlus,
      updateCategory,
      deleteCategory,
    }