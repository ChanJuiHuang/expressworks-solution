var express = require('../node_modules/express');
var bodyParser = require('../node_modules/body-parser');
var app = express();
var port = process.argv[2] || 3000;

var urlencodedParser = bodyParser.urlencoded({extended: false});
app.listen(port);
app.set('views', __dirname + '/templates');
app.set('view engine', 'pug');
app.use(urlencodedParser);

app.get('/', function(req, res){
    res.render('index');
});

app.post('/form', (req, res)=>{
    res.send(req.body.str.split('').reverse().join(''));
});