/**
 * Created by fcc on 16-8-2.
 */
'use strict'
let express = require('express');
let bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post('/user', function(req, res){
    res.send(req.get('abc'));
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});