'use strict';
let req = require('superagent');
req
    .get('localhost:3000/param')
    .send({'name':'fcc'})
    .end(function (err, res) {
        if (res.ok) {
            console.log("ok," + res.text);
        } else {
            console.log("error");
        }
    });