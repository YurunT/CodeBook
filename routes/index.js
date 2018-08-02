var express = require('express');
var router = express.Router();

/* GET home page. */

module.exports = function (app) {
    app.get('/', function(req, res) {
        res.render('index.ejs', { title: 'Express' });
    });

    app.post('/userIndex',function (req,res) {
        //console.log('Form (from querystring): ' + req.query.form);
        console.log('Name (from visible form field): ' + req.body.username);
        console.log('password (from visible form field): ' + req.body.password);
        res.render('userIndex.ejs',{ name: req.body.username });
    });


}