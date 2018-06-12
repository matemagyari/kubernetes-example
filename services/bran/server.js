var sleep = require('sleep');
var request = require('sync-request');

function hodorServiceUrl() {

//    var environment = JSON.stringify(process.env, null, 4); // (Optional) beautiful indented output.
//    console.log('Environment', environment);

    var hodorHost = process.env.HODOR_SERVICE_HOST
    var hodorPort = process.env.HODOR_SERVICE_PORT_HTTP
    return 'http://' + hodorHost + ':' + hodorPort
}

var hodorService = hodorServiceUrl()

function askHodor() {
    console.log('[' + new Date() + '] asking Hodor on [' + hodorService + ']')
    var res = request('GET', hodorService);
    console.log('Hodor said: [' + res.getBody() + ']');
}

while (true) {
    askHodor()
    sleep.sleep(1)
}


