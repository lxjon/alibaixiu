//这个控制器完成所有与用户相关的增删改查
//引入MySQL
const mysql = require('mysql');

//创建连接
const connection = mysql.createConnection({
     host:'127.0.0.1',
     user:'root',
     password:'961358118',
     database:'baixiu'
});

// connection.connect();

exports.login = (email,callback)=>{
 //创建mysql查询
var sql = `select * from users where email = "${email}" `
//调用MySQL模块
connection.query(sql,(err,results)=>{
if(err){
    callback(err);
}else{
    callback(null,results[0]);
}
});
}