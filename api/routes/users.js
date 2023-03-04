// אימפורט לאקספרס
const express = require ('express');
const router = express.Router();

//כאן השמות של הפונקציות שפיזית נמצאות בתיקית קונטרולר
const {signup,
       login,
      } = require('../controllers/users')

//יצירת הרשמה
router.post('/signup', signup)

//יצירת לוגין 
router.post('/login', login)


module.exports = router;
