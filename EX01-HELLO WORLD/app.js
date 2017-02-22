var express = require('../node_modules/express');
var app = express();
var port = process.argv[2];
app.listen(port);

app.get('/home', (req, res)=>{
    res.end('Hello World!');
});