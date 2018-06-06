var http = require('http');
var sleep = require('sleep');

function askHodor() {

    var hodorHost = process.env.HODOR_SERVICE_HOST
    var hodorPort = process.env.HODOR_SERVICE_PORT
    var hodorServiceUrl = 'http://' + hodorHost + ':' + hodorPort

    console.log('Asking Hodor on [' + hodorServiceUrl + ']')

    http.get(hodorServiceUrl, (resp) => {
      let data = '';

      // A chunk of data has been received.
      resp.on('data', (chunk) => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        console.log('Hodor said: ' + data);
      });

    }).on("error", (err) => {
      console.log("Error: " + err.message);
    });
}

while (true) {
    askHodor()
    sleep.sleep(1)
}


