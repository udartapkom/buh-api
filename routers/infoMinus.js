const router = require('express').Router();
//const { createAccount, updateSumm } = require('../controllers/accounting');
const { info } = require('../middleware/info');
const { getData, getAllcategories, createInfoMinus } =require('../controllers/infoMinus')


router.post('/createinfo', createInfoMinus);
router.post('/getallinfo', getAllcategories);
//router.patch('/summ', updateSumm);

module.exports = router;