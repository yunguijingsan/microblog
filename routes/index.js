var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

router.count = 0;
router.hello = function (req, res) {
    res.send('The ' + (++router.count) + ' time is ' + new Date());
};
module.exports = router;
