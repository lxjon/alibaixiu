//这个控制器用于处理用户的业务操作
const userModel = require('../models/userModel.js');
const session = require('express-session');
exports.login = (req, res) => {
    //用户登录验证
    var obj = req.body;
    // console.log(obj);
    // res.end();
    userModel.login(obj.email,(err,data)=>{
    if(err){
        res.json({code:400,msg:'服务器异常'});
    }else{
        if(data){
            if(data.password === obj.password){
                // res.writeHead(200,{
                //    'Set-Cookie':'islogin=true'
                // });
                req.session.islogin = 'true';
                req.session.currentUser = data;
                res.end(JSON.stringify({code:200,msg:'登录成功'}));
            }else{
                res.json({code:400,msg:'密码错误'});
            }
        }else{
            res.json({code:400,msg:'邮箱有误'});
        }
    }
    });
}