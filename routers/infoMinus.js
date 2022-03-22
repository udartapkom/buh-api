const router = require('express').Router();
const { getAllcategories, createInfoMinus } =require('../controllers/infoMinus')

router.post('/createinfo', createInfoMinus);
router.post('/getallinfo', getAllcategories);

module.exports = router;