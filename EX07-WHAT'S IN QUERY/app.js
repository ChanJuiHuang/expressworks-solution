var express = require('../node_modules/express');
var app = express();
var port = process.argv[2] || 3000;

app.get('/search', (req, res)=>{
    res.send(req.query);
});

app.listen(port);