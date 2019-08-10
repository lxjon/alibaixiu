const myconn = require('../utils/myconn.js');

exports.getAllPost = (obj,callback)=>{
    console.log(obj);
      //创建sql查询语句
      var sql = `select posts.*,users.nickname,categories.name 
                 from posts
                 join users on posts.user_id = users.id
                 join categories on posts.category_id = categories.id  where 1=1  `
        if(obj.cate && obj.cate != 'all'){
        sql += `  and category_id = ${obj.cate}`
        }
        if((obj.statu && obj.statu != 'all')){
        sql += `  and posts.status = '${obj.statu}'`    
        }         
        sql +=  `  order by id desc
                      limit ${(obj.pageNum-1)*obj.pageSize},${obj.pageSize}
                 `
      //调用方法获取数据
      myconn.query(sql,(err,result)=>{
       if(err){
           callback(err);
       }
       else{
        let  sql = `select count(*) as cnt
        from posts
        join users on posts.user_id = users.id
        join categories on posts.category_id = categories.id
        where 1=1`
        if(obj.cate && obj.cata != 'all'){//有没有传递分类数据
            sql += ` and category_id = ${obj.cate}`
        }
        if(obj.status && obj.status != 'all'){
            sql += ` and posts.status = '${obj.status}'`
        }

        myconn.query(sql,(err2,resu2)=>{
            if(err2){
                callback(err2);
            }else{
                callback(null,{data:result,total:resu2[0].cnt});
            }
        });
        //    callback(null,result);
       }
      });         
}


// 文章的新增
exports.addPost = (obj,callback)=>{
   let sql = `insert into posts set ?`;
   myconn.query(sql,obj,(err,result)=>{
    if(err){
        callback(err);
    }else{
        callback(null);
    }
   });
}
