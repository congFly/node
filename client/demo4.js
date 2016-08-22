'use strict';
let req = require('superagent');

req
    .post('localhost:3000/header')
    .send({'name':'fcc'})
    .end(function (err, res) {
        if (res.ok) {
            console.log("ok," + res.text);
        } else {
            console.log("error");
        }
    });