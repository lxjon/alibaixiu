//引入MySQL
const mysql = require('mysql');

//创建连接
const connection = mysql.createConnection({
     host:'127.0.0.1',
     user:'root',
     password:'961358118',
     database:'baixiu'
});

// connection.connect();
module.exports = connection ;