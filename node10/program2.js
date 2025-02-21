let http = require('http');
let url = require('url');
let fs = require('fs');
let port = 8080;

let server = http.createServer(function(req, res){
    let parse = url.parse(req.url, true);
    let filename = '.' + parse.pathname;

    fs.readFile('winter.html', function(err, data){
        if(err){
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('404 Not Found');
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })
})

server.listen(port, function(){
    console.log(`http://localhost:${port}`);
})