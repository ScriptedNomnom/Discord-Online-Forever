var http = require('http');

http.createServer(function (req, res) {
  res.write("Active");
  res.end();
}).listen(8080);
