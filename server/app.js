'use strict';
let express = require('express');
let bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post('/body',function (req,res) {
    res.send(req.body.name);
});

app.get('/query', function (req, res) {
    res.send(req.query.name);
});

app.get('/param',function (req,res) {
    res.send(req.param('name'));
});

app.post('/header', function(req, res){
    res.send(req.get('name'));
});

app.post('/json', function(req, res){
    res.send(req.body);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

module.exports=app;