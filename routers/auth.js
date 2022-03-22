const router = require('express').Router();
const { login, createUser } = require('../controllers/users');
//const { info } = require('../middleware/info')
//const { checkRegister, checkLogin } = require('../middleware/validators/validateUsers');

router.post('/signup', createUser);
router.post('/signin', login);

module.exports = router;
