var http = require('http');

var server = http.createServer(function(req, res) {

    res.end("My First Node");
})


server.listen(5050);
console.log("Server Run Successfully");