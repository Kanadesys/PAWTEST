var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', layout: 'main' });
});

router.get("/about" ,(req,res) => { 
  res.render('aboutus', {title: 'About Us', layout: 'main'});
});

// route kontak
router.get("/contact" ,(req,res) => {
  res.render('contact', {title: 'Contact', layout: 'main'});
});

module.exports = router;
