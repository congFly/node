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
    var input = req.query.input;
    res.send('hello world,' + input);
});

app.listen(6000, function () {
    console.log('Example app listening on port 6000!');
});
