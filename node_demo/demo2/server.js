/**
 * Created by 18829 on 2017/9/13.
 */
var http = require("http");
var url = require('url');
// createServer会返回一个对象，这个对象有一个叫做 listen 的方法，这个方法有一个数值参数，指定这个HTTP服务器监听的端口号。
/*
 http.createServer(function(request, response){
     response.writeHead(200,{"Content-Type":"text/plain"});
     response.write("fcc");
     response.end();
 }).listen(8888);*/

/*
 function start() {
     function onRequest(request, response) {
     console.log("Request received.");
     response.writeHead(200, {"Content-Type": "text/plain"});
     response.write("Hello World");
     response.end();
 }

 http.createServer(onRequest).listen(8888);
 console.log("Server has started.");
 }*/


function start(route) {
    function onRequerst(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log('request for' + pathname + 'received!');

        route(pathname);

        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("fcc");
        response.end();
    }

    http.createServer(onRequerst).listen(8888);
    console.log("server has started!");

}

exports.start = start;






