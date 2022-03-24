const router = require('express').Router();
//const { createAccount, updateSumm } = require('../controllers/accounting');
const { info } = require('../middleware/info');
const { getAnyData, getAllcategories, createInfoPlus } =require('../controllers/infoPlus')


router.post('/createinfo', createInfoPlus);
router.get('/getallinfo', getAllcategories);
router.post('/getanyinfo', getAnyData);
//router.patch('/summ', updateSumm);

module.exports = router;