var sleep = require('sleep');
var request = require('sync-request');
var http = require('http');

console.log('Starting up');

function hodorServiceUrl() {

//    var environment = JSON.stringify(process.env, null, 4); // (Optional) beautiful indented output.
//    console.log('Environment', environment);

    var hodorHost = process.env.HODOR_SERVICE_INTERNAL_SERVICE_HOST
    var hodorPort = process.env.HODOR_SERVICE_INTERNAL_SERVICE_PORT_HTTP
    return 'http://' + hodorHost + ':' + hodorPort
}

var hodorService = hodorServiceUrl()

function askHodor() {
    console.log('[' + new Date() + '] asking Hodor on [' + hodorService + ']')
    var res = request('GET', hodorService);
    console.log('Hodor said: [' + res.getBody() + ']');
}

var handleRequest = function(request, response) {
  console.log('Bran received request for URL: ' + request.url);
  response.writeHead(200);
  response.end('Do not disturb');
};

var www = http.createServer(handleRequest);
console.log('Bran listens??');
www.listen(8080);
console.log('Bran listens!');

while (true) {
    askHodor()
    sleep.sleep(1)
}


