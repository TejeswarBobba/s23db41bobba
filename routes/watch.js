var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('watches', { title: 'Search Results for watches' });
});

module.exports = router;
