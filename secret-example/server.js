var sleep = require('sleep');

var environment = JSON.stringify(process.env, null, 4); // (Optional) beautiful indented output.
console.log('Environment', environment);

//get response from environment
var username = process.env.SECRET_USERNAME
console.log('username is: [' + username + ']');

//just keep running, we are only interested in your logs
while (true) {
    sleep.sleep(5)
}
