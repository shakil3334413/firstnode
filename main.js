var http = require('http');

var server = http.createServer(function(req, res) {

    if (req.url == "/") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h3>This is home page</h3>');
        res.end();
    } else if (req.url == "/about") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h3>This is About page</h3>');
        res.end();
    } else if (req.url == "/contact") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h3>This is Contact page</h3>');
        res.end();
    }
})


server.listen(5050);
console.log("Server Run Successfully");