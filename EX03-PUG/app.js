var express = require('../node_modules/express');
var path = require('path');
var app = express();
var port = process.argv[2] || 3000;

app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'pug');
app.listen(port);

app.get('/home', (req, res)=>{
    res.render('index', {date: new Date().toDateString()});
});