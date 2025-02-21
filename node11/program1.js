let http = require('http');
let uc = require('upper-case');
let port = 8080;

let server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc.upperCase("Hello World!"));
  res.end();
});

server.listen(port, function(){
    console.log(`http://localhost:${port}`);
})