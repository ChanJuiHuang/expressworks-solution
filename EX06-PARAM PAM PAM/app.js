var express = require('../node_modules/express');
var crypto = require('crypto');
var app = express();
var port = process.argv[2] || 3000;

app.put('/message/:id', (req, res)=>{
    res.send(crypto.createHash('sha1').update(new Date().toDateString() + req.params.id).digest('hex'));
    
});

app.listen(port);