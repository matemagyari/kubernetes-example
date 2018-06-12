var http = require('http');
var sleep = require('sleep');
var request = require('request-promise');

function hodorServiceUrl() {

    var environment = JSON.stringify(process.env, null, 4); // (Optional) beautiful indented output.
    console.log('Environment', environment);

    var hodorHost = process.env.HODOR_SERVICE_HOST
//    var hodorPort = process.env.HODOR_SERVICE_PORT
    var hodorPort = 8080
    return 'http://' + hodorHost + ':' + hodorPort
}

function askHodor() {

    console.log('[' + new Date() + '] asking Hodor on [' + hodorServiceUrl() + ']')

//    var request = http.get(hodorServiceUrl(), (resp) => {
//      let data = '';
//
//      // A chunk of data has been received.
//      resp.on('data', (chunk) => {
//        data += chunk;
//      });
//
//      // The whole response has been received. Print out the result.
//      resp.on('end', () => {
//        console.log('Hodor said: ' + data);
//      });
//
//    }).on("error", (err) => {
//      console.log("Error: " + err.message);
//    });

    var req = { "method":"GET", "uri": hodorServiceUrl() }
    request(req).then(console.log, console.log);
}

while (true) {
    askHodor()
    sleep.sleep(1)
}


