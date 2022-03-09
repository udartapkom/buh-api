const router = require('express').Router();
const { auth } = require('../middleware/auth');
const { NotFoundErr } = require('../errors/index');

const usersRoute = require('./user');
const authRoute = require('./auth');
const accountingRoute = require('./accounting')
const categoryRoute = require('./category')
const categoryPlusRoute = require('./category-plus')
const infoMinus = require('./infoMinus')
const infoPlus = require('./infoPlus')

router.use('/account', auth, accountingRoute);
router.use('/users', auth, usersRoute);
router.use('/category', auth, categoryRoute);
router.use('/categoryplus', auth, categoryPlusRoute);
router.use('/minus', auth, infoMinus);
router.use('/plus', auth, infoPlus);
router.use('/', authRoute);
router.use('*', auth, () => {
  throw new NotFoundErr('Данные не найдены');
});

module.exports = router;
