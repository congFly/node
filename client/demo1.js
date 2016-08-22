let req = require('superagent');

req
    .post('localhost:3000/body')
    .send({name: 'fcc'})
    .end(function (err, res) {
        if (res.ok) {
            console.log("right," + res.text);
} else {
            console.log("error");
        }
    });
