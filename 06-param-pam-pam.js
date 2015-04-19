// node 06-param-pam-pam.js 8888
// curl -X PUT http://127.0.0.1:8888/message/333
// expressworks verify 06-param-pam-pam.js

var express = require('express');

var app = express();

app.put('/message/:id', function(req, res) {

  var id = req.params.id

  var str = require('crypto')
    .createHash('sha1')
    .update(new Date().toDateString() + id)
    .digest('hex');

  res.send(str);

});

app.listen(Number(process.argv[2]));
