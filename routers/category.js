const router = require('express').Router();
const { 
    createCategoryMinus, 
    updateCategory, 
    deleteCategory,
    getAllMinusCategory, 
} = require('../controllers/category');

router.post('/createminus', createCategoryMinus);
router.patch('/updateminus', updateCategory);
router.delete('/deleteminus', deleteCategory);
router.get('/getminus', getAllMinusCategory);

module.exports = router;