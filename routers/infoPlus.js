const router = require('express').Router();
//const { createAccount, updateSumm } = require('../controllers/accounting');
const { info } = require('../middleware/info');
const { getData, getAllcategories, createInfoPlus } =require('../controllers/infoPlus')


router.post('/createinfo', createInfoPlus);
router.post('/getallinfo', getAllcategories);
//router.patch('/summ', updateSumm);

module.exports = router;