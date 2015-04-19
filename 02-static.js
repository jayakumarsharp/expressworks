// node 02-static.js
// node 02-static.js 8888 public
// curl http://127.0.0.1:8888/
// expressworks verify 02-static.js

var path = require('path');
var express = require('express');

var app = express();

app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));

app.listen(Number(process.argv[2]) || 8888);
