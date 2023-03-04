// אימפורט לאקספרס
const express = require ('express');
const router = express.Router();

//כאן השמות של הפונקציות שפיזית נמצאות בתיקית קונטרולר
const {getAllCategories,
       createCategory,
       getCategory,
       updateCategory,
       deleteCategory
      } = require('../controllers/categories')

//יצירת ראוטר ראשון
router.get('/', getAllCategories)

//יצירת קטגוריה חדש
router.post('/', createCategory)

router.get('/:categoryId',getCategory);

//עידכון קטגוריה
router.patch('/:categoryId', updateCategory)

//מחיקת קטגוריה
router.delete('/:categoryId', deleteCategory)

module.exports = router;
