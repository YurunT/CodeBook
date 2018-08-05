var express = require('express');
var router = express.Router();

/* GET home page. */

module.exports = function (app) {
    app.get('/', function(req, res) {
        res.render('index.ejs', {  title : "first" });
    });
    app.post('/',function (req,res) {
        var username=req.body.username;
        var password=req.body.password;
        var email=req.body.email;
        console.log("username: "+username);
        console.log("password: "+password);
        console.log("email: "+email);
        res.render('index.ejs', { title: 'success' });
    })

    app.post('/userIndex',function (req,res) {
        //console.log('Form (from querystring): ' + req.query.form);
        console.log('Name (from visible form field): ' + req.body.username);
        console.log('password (from visible form field): ' + req.body.password);
        res.render('userIndex.ejs',{ name: req.body.username });
    });
    app.post('/add_account',function (req,res){

        var selectPlatform=req.body.select_;
        var inputPlatform=req.body.input_platform;
        var account=req.body.input_account;
        var code =req.body.input_code;
        var platform;

        if(selectPlatform=="others"){
            platform=inputPlatform;
        }else {
            platform=selectPlatform;
        }

        console.log("the account is :"+platform);
        console.log('Account: '+account);
        console.log('code: '+code);
    });


}