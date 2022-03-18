const router = require('express').Router();
const { login, createUser } = require('../controllers/users');
const { createAccount } = require('../controllers/accounting')
const { checkRegister, checkLogin } = require('../middleware/validators/validateUsers');
const widthoutAcc = 'Без счёта'

router.post('/signup', createUser, createAccount(widthoutAcc));
router.post('/signin', login);

module.exports = router;
