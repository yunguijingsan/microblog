/**
 * Created by lcf on 2014/11/5.
 */

var User = require('./../entity/user')
var util = require('util')
var repo =  require('./repository')
var userRepo = {};

userRepo.find = function(params,findCall){
    var sql = 'select *  from user where name=? and password=?';
    repo.executeQuery(sql,[params.name,params.password],findCall);
}

userRepo.reg = function(name,password,age,func){
    var sql = "insert into user(name,password,age) values(?,?,?)";
    repo.executeQuery(sql,[name,password,age],func)
}

userRepo.login =function(params,callback){
    var sql = 'select count(*) COUNT from user where name=? and password=?';
    repo.executeQuery(sql,[params.name,params.password],callback);
}
module.exports = userRepo;