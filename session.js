const express = require('express');
const querystring = require('querystring');
const session = require('express-session');
const app = express();
app.listen(3009,()=>{
  console.log('http://127.0.0.1:3009');
});
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
  }));

app.get('/',(req,res)=>{
     console.log(req.session);
     if(req.session.islogin && req.session.islogin == 'true'){
         res.end('two');
     }else{
         req.session.islogin = 'true',
         req.session.currendUser = {name:'jack',age:12}
         res.end('first');
     }
    //  res.end();
});