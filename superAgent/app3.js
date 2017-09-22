/**
 * Created by fcc on 16-8-2.
 */
'use strict'
let express = require('express');
let bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post('/fcc',function (req,res) {
    var param = req.param('input');
    res.send('hello world,' + param);
});

app.listen(5000, function () {
    console.log('Example app listening on port 5000!');
});