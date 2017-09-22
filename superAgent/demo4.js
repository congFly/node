/**
 * Created by fcc on 16-8-2.
 */
const request=require('superagent');
let  header={
    'abc':'okok'
};
request
    .post('localhost:3000/user')
    .set('X-API-Key', 'foobar')
    .set('Accept', 'application/json')
    .end(function(err,res){
        if (res.ok) {
            console.log('you are right!,'+header['abc']);
        } else {
            console.log('Oh,no,you are wrong!,'+res.text);
        }
    });


