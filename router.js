//创建路由模块
const express = require('express');
const router = express.Router();
const pagesController = require('./controllers/pagesController.js');

//配置路由
router.get('/', (req, res) => {
    pagesController.getIndexPage(req, res);
});
router.get('/detail', (req, res) => {
    pagesController.getDetailPage(req, res);
});
router.get('/list', (req, res) => {
    pagesController.getListPage(req, res);
});



router.get('/admin', (req, res) => {
    pagesController.getAdminIndexPage(req, res);
});

router.get('/admin/login',(req,res)=>{
   pagesController.getAdminLoginPage(req,res);
});

router.get('/admin/categories', (req, res) => {
    pagesController.getAdminCategoriesPage(req, res);
});

router.get('/admin/comments', (req, res) => {
    pagesController.getAdminCommentsPage(req,res);
});
router.get('/admin/nav-menus', (req, res) => {
    pagesController.getAdminNavMenusPage(req,res);
});
router.get('/admin/password-reset', (req, res) => {
    pagesController.getAdminPasswordResetPage(req,res);
});
router.get('/admin/post-add', (req, res) => {
    pagesController.getAdminPostAddPage(req,res);
});
router.get('/admin/posts', (req, res) => {
    pagesController.getAdminPostsPage(req,res);
});
router.get('/admin/profile', (req, res) => {
    pagesController.getAdminProfilePage(req,res);
});
router.get('/admin/settings', (req, res) => {
    pagesController.getAdminSettingsPage(req,res);
});
router.get('/admin/slides', (req, res) => {
    pagesController.getAdminSlidesPage(req,res);
});
router.get('/admin/users', (req, res) => {
    pagesController.getAdminUsersPage(req,res);
});
//暴露路由
module.exports = router;