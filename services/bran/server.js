var http = require('http');
var sleep = require('sleep');
var request = require('request-promise');

function hodorServiceUrl() {

//    var environment = JSON.stringify(process.env, null, 4); // (Optional) beautiful indented output.
//    console.log('Environment', environment);

    var hodorHost = process.env.HODOR_SERVICE_HOST
    var hodorPort = process.env.HODOR_SERVICE_PORT_HTTP
    return 'http://' + hodorHost + ':' + hodorPort
}

function askHodor() {

    var hodorService = hodorServiceUrl()

    console.log('[' + new Date() + '] asking Hodor on [' + hodorService + ']')

    var request = http.get(hodorService, (resp) => {
      let data = '';

      // A chunk of data has been received.
      resp.on('data', (chunk) => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        console.log('Hodor said: [' + data + ']');
      });

    }).on("error", (err) => {
      console.log("Error: " + err.message);
    });

//    var req = { "method":"GET", "uri": hodorService }
//    request(req).then(console.log, console.log);
}

while (true) {
    askHodor()
    sleep.sleep(1)
}


