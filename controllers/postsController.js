const postsModel = require('../models/postsModel.js');
const moment = require('moment');

exports.getAllPost = (req,res)=>{
//调用数据模块
let  obj =  req.query;
postsModel.getAllPost(obj,(err,data1)=>{  

     if(err){
         res.json({code:400,msg:'数据查询失败'});
     }else{
        //  var arr = result.data;
        // console.log(data,'--------------')
         for(let i=0; i < data1.data.length ; i++){
             data1.data[i].created = moment(data1.data[i].created).format('YYYY-MM-DD HH-mm-ss');
         }
         res.json({
         code:200,
         msg:'查询成功',       //这里创造了一个对象
         data:data1            //data1 === posts.js 中的 result
         });
     }
});
}


// 文章的新增
exports.addPost = (req,res)=>{
    // 接收参数
    var obj = req.body;  //body 是什么 ????
    obj.views = 0;
    obj.likes = 0;
    obj.id = null;
    obj.user_id = req.session.currentUser.id;
    postsModel.addPost(obj,(err)=>{
    if(err){
        console.log(err)
        res.json({
            code:400,
            msg:'新增失败'
        })
    }else{
        res.json({
            code:200,
            msg:'新增成功'
        })
    }
    });
}