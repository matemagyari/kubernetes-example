var sleep = require('sleep');

var environment = JSON.stringify(process.env, null, 4); // (Optional) beautiful indented output.
console.log('Environment', environment);

//get response from environment
var response = process.env.http_response
console.log('Response is: [' + response + ']');

//just keep running, we are only interested in your logs
while (true) {
    sleep.sleep(5)
}
