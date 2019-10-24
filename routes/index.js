var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/iplinfo', function(req, res, next) {
  // function to return IPL INFO will be called here
  let iplinfo = "placeholder value"
  res.render('index', { title: 'Express' , iplinfo});
})

module.exports = router;
