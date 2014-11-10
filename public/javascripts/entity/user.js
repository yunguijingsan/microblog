/**
 * Created by lcf on 2014/11/5.
 */

function User() {
    var name,age,password;
    this.setName = function (thyName) {
        name = thyName;
    };
    this.setAge = function (thyAge) {
        age = thyAge;
    }
    this.setPassword = function(thyPassword){
        password = thyPassword;
    }
    this.sayHi = function () {
        return 'Hello ' +  name;
    };
};
module.exports = User;