var express = require('express');
var router = express.Router();
var mfController = require('../controllers/mfController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'z/OS IPL INFO' });
});

router.get('/iplinfo', mfController.getIplInfo)

module.exports = router;
