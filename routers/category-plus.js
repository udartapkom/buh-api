const router = require('express').Router();
const { 
    createCategoryPlus, 
    updateCategory, 
    deleteCategory 
} = require('../controllers/category-plus');

router.post('/createplus', createCategoryPlus);
router.patch('/updateplus', updateCategory);
router.delete('/deleteplus', deleteCategory);

module.exports = router;