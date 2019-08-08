$(function(){
    let menuPosts = $('#menu-posts');
    let menuSettings = $('#menu-settings');
    let routerName = itcast.getRouterName(location.href);
    // console.log(indexName);
    //判断是否满足条件
    if(routerName == 'post-add' || routerName == 'posts' || routerName == 'categories'){
        //   $('#posts').on(click,function(){
        //   $('.collapsed').removeClass('collapsed').addClass()

        //   });
        menuPosts.addClass('in').attr('aria-expanded','true');
        // menuPosts.parent().find('.collapsed').removeClass('collapsed');
        $('#coll1').removeClass('collapsed');
    }
    if(routerName == 'nav-menus' || routerName == 'slides' || routerName == 'settings'){
        menuSettings.addClass('in').attr('aria-expanded','true');
        $('#coll2').removeClass('collapsed');
    }
    $('#'+routerName).addClass('active');
});