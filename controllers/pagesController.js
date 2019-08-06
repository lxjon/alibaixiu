//这个页面用于返回用户所请求的页面
const querystring = require('querystring');
//约定：给后台页面添加 /admin ；

//前台页面
exports.getIndexPage = (req, res) => {
    res.render('index.ejs');
}
exports.getDetailPage = (req, res) => {
    res.render('detail.ejs');
}
exports.getListPage = (req, res) => {
    res.render('list.ejs');
}


//后台页面
exports.getAdminIndexPage = (req, res) => {
    // var myCookie = querystring.parse(req.headers.cookie);
    // if(myCookie.islogin && myCookie.islogin == 'true'){

    //     res.render('admin/index.ejs');
    // }else{
    //     //重定向
    //     res.writeHead(301,{
    //         'Location':'/admin/login'
    //     });
    //     res.end();
    // }
    // if(req.session.islogin && req.session.islogin == 'true'){
        res.render('admin/index.ejs');
    // }else{
    //     // 重定向
    //     res.writeHead(301,{
    //         'Location':'/admin/login'
    //     });
    //     res.end();
    // }
}
exports.getAdminCategoriesPage = (req, res) => {
    res.render('admin/categories.ejs');
}
exports.getAdminCommentsPage = (req, res) => {
    res.render('admin/comments.ejs');
}
exports.getAdminLoginPage = (req, res) => {
    res.render('admin/login.ejs');
}
exports.getAdminNavMenusPage = (req, res) => {
    res.render('admin/nav-menus.ejs');
}
exports.getAdminPasswordResetPage = (req, res) => {
    res.render('admin/password-reset.ejs');
}
exports.getAdminPostAddPage = (req, res) => {
    res.render('admin/post-add.ejs');
}
exports.getAdminPostsPage = (req, res) => {
    res.render('admin/posts.ejs');
}
exports.getAdminProfilePage = (req, res) => {
    res.render('admin/profile.ejs');
}
exports.getAdminSettingsPage = (req, res) => {
    res.render('admin/settings.ejs');
}
exports.getAdminSlidesPage = (req, res) => {
    res.render('admin/slides.ejs');
}
exports.getAdminUsersPage = (req, res) => {
    res.render('admin/users.ejs');
}