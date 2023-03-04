// אימפורט לאקספרס
const express = require ('express');
const router = express.Router();

//כאן השמות של הפונקציות שפיזית נמצאות בתיקית קונטרולר
const {getAllArticles,
       createArticle,
       getArticle,
       updateArticle,
       deleteArticle
      } = require('../controllers/articles')

//יצירת ראוטר ראשון
router.get('/', getAllArticles);

//יצירת ארטיקל חדש
router.post('/', createArticle);

router.get('/:articleId',getArticle);

//עידכון ארטיקל
router.patch('/:articleId', updateArticle);

//מחיקת ארטיקל
router.delete('/:articleId', deleteArticle);

module.exports = router;
