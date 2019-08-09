//实现所有分类数据相关的操作
const myconn = require('../utils/myconn.js');
exports.getAllCate = (callback)=>{
    var sql = `SELECT * FROM categories`
    myconn.query(sql,(err,data)=>{
     if(err){
         callback(err);
     }else{
         callback(null,data);
     }
    });
}