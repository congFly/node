/**
 * Created by 18829 on 2017/9/13.
 */

var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
    res.send('123456');
});


app.listen(8001, function () {
    console.log('Example app listening on port 8001!');
});