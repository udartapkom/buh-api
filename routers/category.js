const router = require('express').Router();
const { 
    createCategoryMinus, 
    updateCategory, 
    deleteCategory 
} = require('../controllers/category');

router.post('/createminus', createCategoryMinus);
router.patch('/updateminus', updateCategory);
router.delete('/deleteminus', deleteCategory);

module.exports = router;