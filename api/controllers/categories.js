const mongoose = require('mongoose');
const Category = require('../models/category');


//כאן אנו מסדרים את הפונקציות לטובת הנוחות 
//כמו חדר בקרה, כאן פיזית נמצאת הפונקציה שבמידת הצורך נשחק בה 
module.exports = {
    getAllCategories: (req, res) => {
        Category.find().then((categories) => {
            res.status(200).json({
                categories
            })
        }).catch(error => {
            res.status(500).json({
                error
            })
        });       
    },

    createCategory: (req, res) =>{
        const {title, description} = req.body;

        //יצירת קטגוריה חדש
        const category = new Category({
            //מזהה של הקטגוריה
            _id: new mongoose.Types.ObjectId(),
            title,
            description
        });

        category.save().then(() => {
            res.status(200).json({
                message: 'Created category'
            })
        }).catch(error => {
            res.status(500).json({
                error
            })
        });   
    },

    getCategory: (req, res) =>{
        const categoryId = req.params.categoryId;

        Article.findById(categoryId).then((category) =>{
            res.status(200).json({
                category
            })
        }).catch(error => {
            res.status(500).json({
                error
            })
        }); 
    },

    updateCategory: (req, res) =>{
        //יוצרים משתנה ןמכניסים לפונקציה
        //כך נוכל לדעצ לאיזה איידי הוא שייך
        const categoryId = req.params.categoryId

        Category.update({_id: categoryId}, req.body).then(() => {
            res.status(200).json({
            message: 'Category Updated'    
            })
        }).catch(error => {
            res.status(500).json({
                error
            })
        });  
    },

    deleteCategory: (req, res) =>{
        //יוצרים משתנה ןמכניסים לפונקציה
        //כך נוכל לדעצ לאיזה איידי הוא שייך
        const categoryId = req.params.categoryId

        Category.remove({_id: categoryId}).then(() => {
            res.status(200).json({
                message: `Category _id:${articleId} Deleted`
            })   
        }).catch(error => {
            res.status(500).json({
                error
            })
        });  
    
    }
}