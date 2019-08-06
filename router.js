//创建路由模块
const express = require('express');
const router = express.Router();
const pagesController = require('./controllers/pagesController.js');
const userController = require('./controllers/userController.js');
const postsController = require('./controllers/postsController.js');


//配置路由

// var fn = (req, res) => {
//     pagesController.getIndexPage(req, res);
// }
router.get('/', pagesController.getIndexPage)
      .get('/detail', pagesController.getDetailPage)


// router.get('/list', (req, res) => {
//     pagesController.getListPage(req, res);
// });

      .get('/list', pagesController.getListPage)


      .get('/admin', pagesController.getAdminIndexPage)

      .get('/admin/login', pagesController.getAdminLoginPage)

      .get('/admin/categories', pagesController.getAdminCategoriesPage)

      .get('/admin/comments', pagesController.getAdminCommentsPage)
      .get('/admin/nav-menus', pagesController.getAdminNavMenusPage)
      .get('/admin/password-reset', pagesController.getAdminPasswordResetPage)
      .get('/admin/post-add', pagesController.getAdminPostAddPage)
      .get('/admin/posts', pagesController.getAdminPostsPage)
      .get('/admin/profile', pagesController.getAdminProfilePage)
      .get('/admin/settings', pagesController.getAdminSettingsPage)
      .get('/admin/slides', pagesController.getAdminSlidesPage)
      .get('/admin/users', pagesController.getAdminUsersPage)

      .post('/login',userController.login)
      .get('/getAllPost',postsController.getAllPost)
//暴露路由
module.exports = router;