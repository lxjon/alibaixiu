$(function () {
    var pageNum = 1;
    var pageSize = 1;
    function init(search) {
        $.ajax({
            type: 'get',
            url: '/getAllPost',
            //分页查询需要参数
            data: {
                pageNum: pageNum,
                pageSize: pageSize,
                ...search

            },
            success: function (result) {
                console.log(result);
                var html = template('postListTemp', result.data);
                $('tbody').html(html);
                setPagetion(Math.ceil(result.data.total) / pageSize);
            }
        });
    }
    init();

    function setPagetion(total) {
        $('.pagination').bootstrapPaginator({
            //设置版本号
            bootstrapMajorVersion: 3,
            //显示第几页,当前页码
            currentPage: pageNum,
            //总页数
            totalPages: total,
            onPageClicked: function (event, originalEvent, type, page) {
                // 把当前点击的页码赋值给currentPage, 调用ajax,渲染页面
                //page是当前你想获取数据的页码
                // currentPage = page
                // callback && callback()
                console.log(type, page);
                pageNum = page;
                init();
            }
        });
    }

    $.ajax({
        type:'get',
        url:'/getAllCate',
        dataType:'json',
        success:function(resus){
             console.log(resus);
             let str = `<option value="all">所有分类</option>`;
             for(let i = 0; i< resus.data.length ;i++){
                str += `<option value="${resus.data[i].id}">${resus.data[i].name}</option>`
             }
             $('#cates').html(str);
        }

    });

    $('.btn-default').on('click',function(){
       let obj = {
       cate:$('.cateSelector').val(),
       statu:$('.statuSelector').val()
       }   
       console.log(obj);
       init(obj);
    });
  
});