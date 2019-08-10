//引入文件上传模块formidable
const formidable = require('formidable');
const path = require('path');

//利用formidable来进行文件上传
exports.uploadFile = (req, res) => {
    //创建一个新对象
    const form = new formidable.IncomingForm();

    //配置编码
    form.encoding = 'utf-8';

    //配置文件存储目录
    form.uploadDir = __dirname + '/../uploads';

    //设置保留文件扩展名
    form.keepExtensions = true;

    //-----调用方法实现文件上传
    //请求报文 req 传递的文件数据就在请求报文的请求体中

    //回调函数有三个参数
    //err 错误信息对象
    //fields  普通键值对
    //files  返回文件上传成功后的详细信息，主要储存上传成功后的信息  
    form.parse(req, (err, fields, files) => {
        if (err) {
            console.log(err);
            res.json({
                code: 400,
                msg: '文件上传失败'
            });
        } else {
            // console.log(fields);
            // console.log('_________');
            // console.log(files);
            var imgname = path.basename(files.img.path);
            res.json({
                code: 200,
                msg: '文件上传成功',
                img:imgname
            });
        }
    });
}