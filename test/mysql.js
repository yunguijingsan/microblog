/**
 * Created by lcf on 2014/11/5.
 */
var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'microblog',
    port: 3306
});
conn.connect();
conn.query('select count(*) as COUNT from user', function(err, rows) {
    if (err) throw err;
    console.log('User count : ', rows[0].COUNT);
});
//var insertSQL = "insert into user(name,age) values('lcf',26)"
//conn.query(insertSQL, function (err, res) {
//    if (err) throw err;
//    console.log( res);
//});
conn.end();