// node 03-jade.js 8888 templates
// curl http://127.0.0.1:8888/home
// expressworks verify 03-jade.js

// First init a package.json then install the package locally:
//   1. npm init
//   2. npm install jade --save

var express = require('express');

var app = express();

app.set('view engine', 'jade');
app.set('views', process.argv[3]);

app.get('/home', function(req, res) {
  res.render('index', {date: new Date().toDateString()});
})

app.listen(Number(process.argv[2]) || 8888)
