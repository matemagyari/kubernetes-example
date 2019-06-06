var sleep = require('sleep');
var request = require('sync-request');
var http = require('http');

console.log('Starting up');

function hodorServiceUrlByEnv() {

//    var environment = JSON.stringify(process.env, null, 4); // (Optional) beautiful indented output.
//    console.log('Environment', environment);

    var hodorHost = process.env.SERVICE_B_SERVICE_HOST
    var hodorPort = process.env.SERVICE_B_SERVICE_PORT_HTTP
    return 'http://' + hodorHost + ':' + hodorPort
}

var hodorServiceByEnv = hodorServiceUrlByEnv()
var hodorServiceByDNS = 'http://service-b'

function askHodor() {
    var hodorService;
    if (Math.random() >= 0.5) {
        hodorService = hodorServiceByEnv
     }
     else {
        hodorService = hodorServiceByDNS
     }
    console.log('[' + new Date() + '] asking Hodor on [' + hodorService + ']')
    var res = request('GET', hodorService);
    console.log('Hodor said: [' + res.getBody() + ']');
}

while (true) {
    askHodor()
    sleep.sleep(1)
}


