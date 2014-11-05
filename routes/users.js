var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', function (req, res) {
    res.render('list', {
        title: 'List',
        items: [1991, 'byvoid', 'express', 'Node.js']
    });
});

router.all = function(req, res, next) {
    if(req.params.username.length >4){
        res.send('all captured  user:'+req.params.username);
    }else{
        next();
    }
};

router.getUser = function (req, res, next) {
    res.send('getUser captured  user:'+req.params.username);
};

var userRepo = require('./../public/javascripts/repository/UserRepo');
var url = require('url');
router.reg = function(req,res){
    var params = url.parse(req.url,true).query;
    res.render('index', { title: userRepo.reg(params.name,"123",params.age) });
}
router.login = function(req,res){
    console.log(userRepo.reg("lcf","123",24));
}
router.logout = function(req,res){
    console.log(userRepo.reg("lcf","123",24));
}
router.post = function(req,res){
    console.log(userRepo.reg("lcf","123",24));
}

module.exports = router;
