var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', function (req, res) {
    res.render('list', {
        title: 'List',
        items: [1991, 'byvoid', 'express', 'Node.js']
    });
});

router.all = function (req, res, next) {
    if (req.params.username.length > 4) {
        res.send('all captured  user:' + req.params.username);
    } else {
        next();
    }
};

router.getUser = function (req, res, next) {
    var params = url.parse(req.url, true).query;
    userRepo.find(params, function (data) {
        res.json(data);
    })
};

var userRepo = require('./../public/javascripts/repository/userRepository');
var blogRepo = require('./../public/javascripts/repository/blogRepository');
var url = require('url');
router.reg = function (req, res) {
    var params = url.parse(req.url, true).query;
    userRepo.reg(params.name, "123", params.age, function (result) {
        res.render('index', { title: params.name});
    })
}
router.login = function (req, res) {
    var params = url.parse(req.url, true).query;
    userRepo.login(params, function (result) {
        if (result[0].COUNT == 1) {
            res.render('index', { title: "登陆成功" + params.name});
        } else {
            res.render('index', { title: "用户名或密码不正确"});
        }
    })
}
router.logout = function (req, res) {
    var params = url.parse(req.url, true).query;
    res.render('index', { title: "注销" + params.name});
}
router.post = function (req, res) {
    var params = url.parse(req.url, true).query;
    blogRepo.post(params, function (data) {
        res.json(data);
    })
}

router.delete = function(req,res){
    var params = url.parse(req.url, true).query;
    blogRepo.delete(params,function(data){
        res.json(data);
    })
}

module.exports = router;
