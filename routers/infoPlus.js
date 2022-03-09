const router = require('express').Router();
//const { createAccount, updateSumm } = require('../controllers/accounting');
const { info } = require('../middleware/info');
const { getData, getAllcategories } =require('../controllers/infoPlus')


router.post('/createinfo', getData);
router.post('/getallinfo', getAllcategories);
//router.patch('/summ', updateSumm);

module.exports = router;