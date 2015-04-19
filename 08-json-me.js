// node 08-json-me.js 8888 books.json
// curl http://127.0.0.1:8888/books
// chrome http://127.0.0.1:8888/books
// expressworks verify 08-json-me.js

var express = require('express');
var fs = require('fs');

var app = express();

app.get('/books', function(req, res) {

  var filename = process.argv[3]

  fs.readFile(filename, function(e, data) {

    if (e) {
      return res.send(500);
    }

    try {
      books = JSON.parse(data);
    } catch (e) {
      res.send(500);
    }

    res.json(books);

  })

});

app.listen(Number(process.argv[2]));
