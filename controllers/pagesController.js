//这个页面用于返回用户所请求的页面
//约定：给后台页面添加 /admin ；

//前台页面
module.exports.getIndexPage = (req, res) => {
    res.render('index.ejs');
}
module.exports.getDetailPage = (req, res) => {
    res.render('detail.ejs');
}
module.exports.getListPage = (req, res) => {
    res.render('list.ejs');
}


//后台页面
module.exports.getAdminIndexPage = (req, res) => {
    res.render('admin/index.ejs');
}
module.exports.getAdminCategoriesPage = (req, res) => {
    res.render('admin/categories.ejs');
}
module.exports.getAdminCommentsPage = (req, res) => {
    res.render('admin/comments.ejs');
}
module.exports.getAdminLoginPage = (req, res) => {
    res.render('admin/login.ejs');
}
module.exports.getAdminNavMenusPage = (req, res) => {
    res.render('admin/nav-menus.ejs');
}
module.exports.getAdminPasswordResetPage = (req, res) => {
    res.render('admin/password-reset.ejs');
}
module.exports.getAdminPostAddPage = (req, res) => {
    res.render('admin/post-add.ejs');
}
module.exports.getAdminPostsPage = (req, res) => {
    res.render('admin/posts.ejs');
}
module.exports.getAdminProfilePage = (req, res) => {
    res.render('admin/profile.ejs');
}
module.exports.getAdminSettingsPage = (req, res) => {
    res.render('admin/settings.ejs');
}
module.exports.getAdminSlidesPage = (req, res) => {
    res.render('admin/slides.ejs');
}
module.exports.getAdminUsersPage = (req, res) => {
    res.render('admin/users.ejs');
}