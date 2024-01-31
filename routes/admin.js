var express = require('express');
const adminController = require("…/controllers/adminController.js");
var router = express.Router();
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = express.json();
router.get('/',adminController.getarticle);
router.get('/:idArticle',adminController.getArticle)
router.post('/add Article',adminController.addArticle);
router.post('/edit Article",admin Controller.edit Article');
router.post('/delete Article',adminController.deleteArticle);
module.exports = router;