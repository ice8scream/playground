var express = require('express');
var router = express.Router();
var path = require('path');

router.use(express.static(path.join(__dirname, '../', 'public/games/buildingescape/')));

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.sendFile('index');
    //res.render(path.join( 'games', 'buildingescape', 'index'));
        //render('games/buildingescape/index', {title: 'game'});
});

module.exports = router;
