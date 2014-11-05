/**
 * Created by lcf on 2014/11/5.
 */

var User = require('./../entity/user')
var userRepo = {};
userRepo.reg = function(name,password,age){
    var user = new User();
    user.setName(name);
    user.setAge(age)
    return user.sayHi();
}

module.exports = userRepo;