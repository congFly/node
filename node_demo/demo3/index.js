/**
 * Created by 18829 on 2017/9/13.
 */
var server = require("./server");
var router = require("./router");

server.start(router.route);
