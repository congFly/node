/**
 * Created by 18829 on 2017/9/14.
 */
var exec = require('child_process').exec;
function start() {
    console.log("Request handler 'start' was called.");

    var content = 'empty';

    //获取当前目录下所有的文件（“ls -lah”）,当/startURL请求的时候将文件信息输出到浏览器中。
    exec('ls -lah', function (error, stdout, stderr) {
        content = stdout;
    });


    return content;

}


function upload() {
    console.log("Request handler 'upload' was called.");
    return 'hello upload!';
}

exports.start = start;
exports.upload = upload;