var http = require('http');

console.log('Hodor wakes up');

var handleRequest = function(request, response) {
  console.log('Hodor received request for URL: ' + request.url);
  response.writeHead(200);
  response.end('Hodor');
};

console.log('Hodor listens?');
var www = http.createServer(handleRequest);
console.log('Hodor listens??');
www.listen(8080);
console.log('Hodor listens!');
