var express = require('express');
var router = express.Router();

/* GET home page. */

module.exports = function (app) {
    app.get('/', function(req, res) {
        res.render('index', { title: 'Express' });
    });
    app.get("/abc", function (req, res) {
        res.render("index", {title:"育知同创" + req.path})
    });

}