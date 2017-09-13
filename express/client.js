'use strict';
var superagent = require('superagent');
superagent
    .get('/')
    .send({name: 'Manny', species: 'cat'})
    .set('X-API-Key', 'foobar')
    .set('Accept', 'application/json')
    .end(function (res) {
        if (res.ok) {
            alert('yay got ' + JSON.stringify(res.body));
        } else {
            alert('Oh no! error ' + res.text);
        }
    });