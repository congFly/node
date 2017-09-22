/**
 * Created by fcc on 16-8-4.
 */

var app = require('superagent');
app.post('localhost:3000/user')
    .type('form')
    .set('Content-Type','application/json')
    .send('{"input":"five"}')
    .end(function (err,req) {
        if(req.ok){
            console.log('you are right!,'+req.text)
        }
        else {
            console.log('Oh,no,you are wrong!,'+req.text)
        }
    });