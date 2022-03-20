const router = require('express').Router();
const { 
    createCategoryPlus, 
    updateCategory, 
    deleteCategory,
    getAllPlusCategory,
} = require('../controllers/category-plus');

router.post('/createplus', createCategoryPlus);
router.patch('/updateplus', updateCategory);
router.delete('/deleteplus', deleteCategory);
router.get('/getplus', getAllPlusCategory);

module.exports = router;