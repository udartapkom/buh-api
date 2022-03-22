const router = require('express').Router();
const { createAccount, updateSumm, getAccounts, updateAccount, deleteAccount } = require('../controllers/accounting');
const { checkRegister, checkLogin } = require('../middleware/validators/validateUsers');
//const { patch } = require('./user');

router.post('/createaccount', createAccount);
router.get('/getaccounts', getAccounts);
router.delete('/deleteaccount', deleteAccount);
router.patch('/updateaccount', updateAccount);
router.patch('/summ', updateSumm);

module.exports = router;