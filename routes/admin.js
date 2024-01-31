var express = require('express');
const adminController = require("../Controller/adminController.js");
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false }); 
const jsonParser = express.json();

//Контроллеры для админ панели
router.get('/',adminController.getarticle);
router.get('/:idArticle',adminController.getArticle)
router.post('/add Article',adminController.addArticle);
router.post('/edit Article',adminController.editArticle);
router.post("/delete Article",adminController.deleteArticle);


//Комментарий из ветки моделей
router.get('/',adminController.getArticleAll);
router.get('/:idArticle',adminController.getArticle);
router.post('/addArticle',adminController.addArticle); 
router.post('/editArticle', adminController.editArticle); 
router.post('/deleteArticle',adminController.deleteArticle);

module.exports = router;