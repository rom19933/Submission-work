//2
//// קישור לספריית אקספרס
const express = require('express');
const app = express();
//קישור לספריית מורגן
const morgan = require('morgan');
//קישור למונגוס
const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@submission-work.tmy9fce.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
//חיבור ל MONGODB
mongoose.connection.on('connected', () =>{
    console.log('MongoDB Connected!'); 
});

//מיבאים את המאמר
const articlesRoutes = require('./api/routes/articles')
//מיבאים את קונטרולר
const categoriesRoutes = require('./api/routes/categories')
//מיבאים את המשתמש
const usersRoutes = require('./api/routes/users')


app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));



//עושים קורס כדי שכשללקוח ולשרט לא יהיה לוקאלהוסט תואם הם יוכלו לתקשר
//זאת אומרת שהם יוכלו לעבוד גם כשהשרתים לא זהים
app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
    if(req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Method", "PUT, POST, PATCH, DELETE, GET")
        return res.status(200).json({});
    }
    //ימשיך את הפעולות
    next();
});

//נשתמש בזה כדי לכתוב בבודי ולקבל בריספונס


// //מה שאני ארשום בבודיי זה יציג לי בטרמינל
// app.use((req, res, next) =>{
//     req.on('data', (chank) => {
//         console.log(chank.toString());
//     });
//     req.on('end',() => {
//         next();
//     });
// });



//routs
//אנחנו נקבל אותו בראוטר  "users,/categories,/articles"כל פעם שכנפנה ל
app.use('/articles', articlesRoutes);
app.use('/categories', categoriesRoutes);
app.use('/users', usersRoutes);

//כאן מייצרים הודעת שגיאה
app.use((req, res, next) => {
    const error = new Error ('Not Found');
    error.status = 404;
    next(error);
})
//ניהול של כל השגיעות שיצוצו
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error:{message: error.message}
    })
});

module.exports = app;