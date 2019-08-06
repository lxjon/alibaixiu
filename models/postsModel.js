const myconn = require('../utils/myconn.js');

exports.getAllPost = (obj,callback)=>{
      //创建sql查询语句
      var sql = `select posts.*,users.nickname,categories.name 
                 from posts
                 join users on posts.user_id = users.id
                 join categories on posts.category_id = categories.id
                 order by id desc
                 limit ${(obj.pageNum-1)*obj.pageSize},${obj.pageSize}
                 `
      //调用方法获取数据
      myconn.query(sql,(err,result)=>{
       if(err){
           callback(err);
       }
       else{
           callback(null,result);
       }
      });         
}
