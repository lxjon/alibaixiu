const express = require('express');
const querystring = require('querystring');
const app = express();
app.listen(3008,()=>{
console.log('http://127.0.0.1:3008');
});
app.get('/',(req,res)=>{
    var cookie = req.headers.cookie;
    var obj = querystring.parse(cookie);
    console.log(obj);
    if(obj.islogin && obj.islogin == 'true'){
        res.end('welcome back');
    }else{
        res.writeHead(200,{
            'Content-Type':'text/html;charset=utf-8',
            'Set-Cookie' :'islogin=true' 
            });
            res.end('firs come');
    }
 
});