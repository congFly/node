'use strict';
let supertest = require('supertest');
let app = require('../server/app');
let req = supertest(app);

describe('Post /body', function () {
    it("should get a parameter from body", function (done) {
        req
            .post('/body')
            .send({name: "fcc"})
            .end(function (err, res) {
                expect(res.text).toEqual('fcc');
                done(err);
            })
    })
});

describe('Get /query', function () {
    it("should get a parameter from query", function (done) {
        req
            .get('/query?name=fcc')
            .expect('fcc')
            .end(function (err, res) {
                if (err) {
                    done.fail(err);
                }
                else {
                    done();
                }
            })
    })
});

describe('Get /param', function () {
    it("should get a parameter from params", function (done) {
        req
            .get('/param?name=fcc')
            .end(function (err, res) {
                expect(res.text).toEqual('fcc');
                done(err);
            })
    })
});
