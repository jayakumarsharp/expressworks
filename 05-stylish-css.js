// node 05-stylish-css.js 8888 public
// curl http://127.0.0.1:8888/
// expressworks verify 05-stylish-css.js

// First init a package.json then install the package locally:
//   1. npm init
//   2. npm install stylus --save

var express = require('express');
var app = express();

app.use(require('stylus').middleware(process.argv[3]));

app.use(express.static(process.argv[3]));


app.listen(Number(process.argv[2]));
