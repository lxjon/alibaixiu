//这个控制器完成所有与用户相关的增删改查
const myconn = require('../utils/myconn.js');

exports.login = (email,callback)=>{
 //创建mysql查询
var sql = `select * from users where email = "${email}" `
//调用MySQL模块
myconn.query(sql,(err,results)=>{
if(err){
    callback(err);
}else{
    callback(null,results[0]);
}
});
}