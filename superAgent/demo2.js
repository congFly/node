/**
 * Created by fcc on 16-8-2.
 */
const request=require('superagent');
request
    .post('localhost:6000/fcc')
    .query({input:'qwe'})
    // .send()//相当于一个请求
    .set('X-API-Key', 'foobar')
    .set('Accept', 'application/json')
    .end(function(err,res){
        if (res.ok) {
            console.log('you are right!'+res.text);
        } else {
            console.log('Oh,no!you are wrong!'+res.text);
        }
    });
