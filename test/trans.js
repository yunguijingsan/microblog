/**
 *
 * Created by lcf on 2014/11/10.
 */

var mysql = require('mysql');
pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'microblog',
    port: 3306
});