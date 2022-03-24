const router = require('express').Router();
const { getAllcategories, createInfoMinus, getAnyData } =require('../controllers/infoMinus')

router.post('/createinfo', createInfoMinus);
router.post('/getanyinfo', getAnyData);
router.get('/getallinfo', getAllcategories);

module.exports = router;