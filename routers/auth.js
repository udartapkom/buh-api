const router = require('express').Router();
const { login, createUser } = require('../controllers/users');
const { createAccount } = require('../controllers/accounting')
const { checkRegister, checkLogin } = require('../middleware/validators/validateUsers');

router.post('/signup', createUser);
router.post('/signin', login);

module.exports = router;
