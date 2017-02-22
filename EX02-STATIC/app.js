var express = require('../node_modules/express');
var app = express();
var port = process.argv[2] || 3000;
var assetPath = process.argv[3];
app.listen(port);
app.use(express.static(assetPath));