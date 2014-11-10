/**
 * Created by lcf on 2014/11/7.
 */
var userRepository = require('./../public/javascripts/repository/userRepository');
var Blog = require('./../public/javascripts/entity/blog');
var User = require('./../public/javascripts/entity/user');

var params = {}
params.name ='lcf';
params.password = '1243'
userRepository.find(params,function(data){
    console.log(data);
})

console.log(new Date().getTime())