var express = require('../node_modules/express');
var stylus = require('../node_modules/stylus');
var app = express();
var port = process.argv[2] || 3000;

app.set('views', __dirname + '/templates');
app.set('view engine', 'pug');
app.listen(port);

app.use(stylus.middleware(__dirname + '/styles'));
app.use('/', express.static(__dirname + '/styles'));

app.get('/', (req, res)=>{
    res.render('index');
});