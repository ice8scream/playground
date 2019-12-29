var express = require('express');
var router = express.Router();
var path = require('path');
    
router.use(express.static(path.join(__dirname, '../', 'public/HTML5/')));

router.get('/', function(req, res, next) {
  res.sendFile('index');

});

module.exports = router;
