var express = require('express')
var bodyParser = require('body-parser')
 
var app = express()
 
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded())
 
// parse application/json 
app.use(bodyParser.json())
 
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  console.log(JSON.stringify(req.body, null, 2));
  res.end(JSON.stringify(req.body, null, 2))
})

app.listen(3000);