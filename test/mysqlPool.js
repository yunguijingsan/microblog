/**
 * Created by lcf on 2014/11/6.
 */
var pool = require('./../public/javascripts/repository/repository');
var Blog = require('./../public/javascripts/entity/blog');

function dealResult(result){
    console.log("dealResult  "+ result);
}
var sql = 'select *  from user where name=? and password=?';
var blog = new Blog();
blog.content = "myfirst"
blog.date =new Date();
blog.title="myTitle"

 sql = 'insert into blog '
pool.executeQuery(sql,[],dealResult);