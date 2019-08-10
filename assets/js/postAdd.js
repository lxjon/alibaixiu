$(function(){
  $('#feature').on('change',()=>{
      console.log(123);
      //获取文件对象
      var myfile = document.querySelector('#feature').files[0];
    //   console.log(myfile);
    //   console.dir(document.querySelector('#feature'));
    //   创建formdata 对象
    var formdata = new FormData();

    //追加数据到formdata中
    formdata.append('img',myfile);
    // formdata.append('names','jjjj');
    //使用Ajax发送请求
    $.ajax({
    type:'post',
    url:'/uploadFile',
    data:formdata,
    contentType:false,  //让Ajax不要对数据进行编码，让formdata来做
    processData:false,  //让ajax不要对数据进行处理，因为formdata已经处理好了
    dataType:'json',
    success:(res)=>{
          console.log(res);
          if(res.code === 200){
              //实现预览：给img标签设置src属性，让浏览器进行解析，发起二次请求；
              $('.thumbnail').attr('src','/uploads/'+res.img).show();
              $('[name="feature"]').val(res.img);
          }else{
            $('.alert-danger>span').text(res.msg).fadeIn(500).delay(3000).fadeOut(500);
            console.log(err);
          }
    }     
    });
  });

   //加载动态分类
   $.ajax({
       
    type:'get',
    url:'/getAllCate',
    dataType:'json',
    success:function(resus){
     console.log(resus);
     let str = '<option value="all">请选择</option>'
     for(let i = 0; i < resus.data.length ;i++){
       str += `<option value="${resus.data[i].id}">${resus.data[i].name}</option>`
     }
     $('#category').html(str);
    }
   })
    
  //富文本框初始化
  CKEDITOR.replace( 'content' );

  //保存文件
  $('.btnSave').on('click',function(){

    CKEDITOR.instances.content.updateElement();
    // var data = $('form').serialize();

    // console.log(data);
    $.ajax({
     type:'post',
     url:'/addPost',
     data: $('form').serialize(),
     dataType:'json',
     success:function (res) {
        if(res.code == 200){
          location.href = '/admin/posts';
        }else{
          console.log(res.msg);
        }
       }
    });

  });

});