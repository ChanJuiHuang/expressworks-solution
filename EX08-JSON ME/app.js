var express = require('../node_modules/express');
var fs = require('fs');
var app = express();
var port = process.argv[2] || 3000;
var fileName = process.argv[3];

app.get('/books', (req, res)=>{
    fs.readFile(fileName, (err, data)=>{
        res.send(JSON.parse(data.toString()));
    });
});

app.listen(port);