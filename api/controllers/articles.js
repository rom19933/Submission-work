const mongoose = require('mongoose');
//יבוא של המודל
const Article = require('../models/article')


//כאן אנו מסדרים את הפונקציות לטובת הנוחות 
//כמו חדר בקרה, כאן פיזית נמצאת הפונקציה שבמידת הצורך נשחק בה 
module.exports = {
    getAllArticles: (req, res) => {
        //שליפת כל המאמרים 
        Article.find().then((articles) => {
            res.status(200).json({
                articles
            })
        }).catch(error => {
            res.status(500).json({
                error
            })
        });       
    },

    createArticle: (req, res) =>{
        const {title, description, content} = req.body;

        //יצירת מאמר חדש
        const article = new Article({
            //מזהה של המאמר
            _id: new mongoose.Types.ObjectId(),
            title,
            description,
            content
        });

        article.save().then(() => {
            res.status(200).json({
                message: 'Created article'
            })
        }).catch(error => {
            res.status(500).json({
                error
            })
        });   
    },

    getArticle: (req, res) =>{
        const articleId = req.params.articleId;

        Article.findById(articleId).then((article) =>{
            res.status(200).json({
                article
            })
        }).catch(error => {
            res.status(500).json({
                error
            })
        }); 
    },
    
    updateArticle: (req, res) =>{
        //יוצרים משתנה ןמכניסים לפונקציה
        //כך נוכל לדעצ לאיזה איידי הוא שייך
        const articleId = req.params.articleId

        Article.update({_id: articleId}, req.body).then(() => {
            res.status(200).json({
            message: 'Article Updated'    
            })
        }).catch(error => {
            res.status(500).json({
                error
            })
        });  
    },

    deleteArticle: (req, res) =>{
        //יוצרים משתנה ןמכניסים לפונקציה
        //כך נוכל לדעצ לאיזה איידי הוא שייך
        const articleId = req.params.articleId

        Article.remove({_id: articleId}).then(() => {
            res.status(200).json({
                message: `Article _id:${articleId} Deleted`
            })   
        }).catch(error => {
            res.status(500).json({
                error
            })
        });  
    
    }
}