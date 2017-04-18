process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var fs = require('fs');

// Web App
var app = express();
var router = express.Router();
var path = __dirname + '/';

router.use(function (req, res, next) {
    console.log('/' + req.method);
    next();
});

router.get('/',function(req, res){
    res.sendFile(path + 'index.html');
});

app.use('/',router);
app.use('/js', express.static(__dirname + '/js'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/fonts', express.static(__dirname + '/fonts'));

/*app.get('/selectedprono', function (req, res) {
    var prono = db.exec('SELECT raw FROM doublechances WHERE id_game NOT IN (SELECT id_game FROM results) ORDER BY id_game ASC LIMIT 1;');
    res.json(prono);
});*/

var port = process.env.PORT;
app.listen(port || 3000, function () {
    console.log('Live at Port 3000');
});