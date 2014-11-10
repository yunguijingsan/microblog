/**
 * Created by lcf on 2014/11/6.
 */
var mysql = require('mysql');
pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'microblog',
    port: 3306
});



pool.executeQuery = function (sql,values, func) {
    pool.getConnection(function (err, conn) {
        if (err) throw err;
        conn.query(sql,values, function (err, result) {
            if (err) throw err;
            if (func instanceof Function) func(result);
        })
        conn.release();
    })
}
module.exports = pool;