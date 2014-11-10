/**
 * Created by lcf on 2014/11/6.
 */

var Blog = require('./../entity/blog')

var repository = require('./repository')

var BlogRepository = {};
BlogRepository.post = function(params,callback){
    var blog={};
    blog.title = params.title;
    blog.date = new Date().getTime();
    blog.content = params.content;
    blog.user = params.user;
    var sql = "insert into blog(title,date,content) values(?,?,?)"
    repository.executeQuery(sql,[blog.title,blog.date,blog.content],callback);
}
BlogRepository.delete=function(params,callback){
    var sql = 'delete from blog where id=?';
    repository.executeQuery(sql,[params.id],callback)
}
BlogRepository.addComment=function(params,callback){

}


module.exports = BlogRepository;