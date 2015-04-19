// node 07-whats-in-query.js 8888
// curl http://127.0.0.1:8888/search?q=hunch&lang=en
// chrome http://127.0.0.1:8888/search?q=hunch&lang=en
// expressworks verify 07-whats-in-query.js

var express = require('express');
var app = express();

app.get('/search', function(req, res){

  var query = req.query;

  res.send(query);

});

app.listen(Number(process.argv[2]));
