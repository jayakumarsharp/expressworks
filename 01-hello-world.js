// node 01-hello-world.js 8888
// curl http://127.0.0.1:8888/home
// expressworks verify 01-hello-world.js

var express = require('express');

var app = express();

app.get('/home', function(req, res) {
  res.end('Hello World!');
});

app.listen(Number(process.argv[2]));
