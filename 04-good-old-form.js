// node 04-good-old-form.js 8888
// curl --data "str=esrever" http://127.0.0.1:8888/form
// expressworks verify 04-good-old-form.js

// First init a package.json then install the package locally:
//   1. npm init
//   2. npm install body-parser --save

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.post('/form', function(req, res) {
  res.send(req.body.str.split('').reverse().join(''));
})

app.listen(Number(process.argv[2]));
