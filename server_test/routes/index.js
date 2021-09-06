var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'ssac  hi' });
  res.json({
    title: "ssac"
  });

});


// GET /ssac
// res = {ssac : 'love' }
router.get('/ssac', function(req, res, next) {
  res.json({
    ssac : 'love'
  });
});

// GET /test
// res = {test : 'is_good' }
router.get('/test', function(req, res, next) {
  res.json({
    test : 'is_good'
  });
});






module.exports = router;
