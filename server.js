var http = require("http");

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/plain'}); 
    res.end("Hello Node Bootcamp!");
});

var port = process.env.PORT || 3000;

server.listen(port);
console.log("Server listening on port " + port);