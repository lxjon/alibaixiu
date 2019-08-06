$(function () {
    $('.btn-login').on('click', function () {
        $.ajax({
        type:'post',
        url:'/login',
        // dataType:'json',
        //serialize 可以获取指定表单中，所有拥有name属性的元素的value值
        data:$('form').serialize(),
        success:function(res){
         console.log(res);
         if(res.code == 400){
             $('.alert-danger > span').text(res.msg);
            //  $('.alert-danger').show();
            $('.alert-danger').fadeIn(500).delay(2000).fadeOut(500);
            
         }else{
             location.href='/admin';
         }
        }
        });
    });
});