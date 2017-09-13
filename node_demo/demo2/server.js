/**
 * Created by 18829 on 2017/9/13.
 */
var http = require("http");
// createServer会返回一个对象，这个对象有一个叫做 listen 的方法，这个方法有一个数值参数，指定这个HTTP服务器监听的端口号。
/*
 http.createServer(function(request, response){
 response.writeHead(200,{"Content-Type":"text/plain"});
 response.write("fcc");
 response.end();
 }).listen(8888);*/

function onRequest(request, response) {
    console.log('request received!');
    response.writeHead(200, {"content-Type": "text-plain"});
    response.write("fcc");
    response.end();
}


http.createServer(onRequest).listen(8888);

console.log('server has start');