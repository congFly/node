/**
 * Created by 18829 on 2017/9/13.
 */
var http = require("http");
var url = require('url');

function start() {
    console.log("Request handler 'start' was called.");
}

function upload() {
    console.log("Request handler 'upload' was called.");
}


exports.start = start;
exports.upload = upload;