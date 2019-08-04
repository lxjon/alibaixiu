//引入express
const express = require('express');
const fs = require('fs');
const router = require('./router.js');
//创建服务器
const app = express();

//设置端口监听
app.listen(8080, () => {
    console.log('http://127.0.0.1:8080');
});



// 托管静态资源页面
app.use('/assets', express.static('assets'));
app.use('/uploads', express.static('uploads'));

//配置ejs模板引擎
app.set('view engine', 'ejs');
//设置ejs模板文件查询的默认目录配置，以后所有的ejs资源都会指向这个目录 __dirname+'/views'
app.set('views', __dirname + '/views');

//配置路由
// app.get('/', (req,res) => {
//     res.render('index.ejs');
// });
// app.get('/admin',(req,res)=>{
//     res.render('admin/index.ejs')
// });
// app.get('/admin/categories',(req,res)=>{
//     res.render('admin/categories.ejs');
// });
// app.get('/admin/comments',(req,res) => {
// res.render('admin/comments.ejs');
// });
// app.get('/admin/nav-menus',(req,res)=>{
//     res.render('admin/nav-menus');
// });
// app.get('/admin/password-reset',(req,res)=>{
//     res.render('admin/password-reset');
// });
//让app使用router进行管理
app.use(router);