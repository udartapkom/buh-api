const router = require('express').Router();
const { createAccount, updateSumm } = require('../controllers/accounting');
const { checkRegister, checkLogin } = require('../middleware/validators/validateUsers');

router.post('/createaccount', createAccount);
router.patch('/summ', updateSumm);

module.exports = router;