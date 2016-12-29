var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var config = require('./db');
var xss = require('xss');
/*获取新闻 */
router.get('/', function(req, res, next) {
  var newstype = req.query.newstype;

  var connection = mysql.createConnection(config.onelib);
  exports.connection  = connection ;
  	 connection.connect();
  	 connection.query('SELECT * FROM `news` WHERE `newstype`=? limit 0,2',[newstype],function(err,rows,fields){
  	 	res.json(rows);
  	 });


});

module.exports = router;
var html = xss('<script>alert("xss");</script>');
console.log(html);