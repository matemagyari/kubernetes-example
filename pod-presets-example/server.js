var sleep = require('sleep');

var environment = JSON.stringify(process.env, null, 4); // (Optional) beautiful indented output.
console.log('Environment', environment);

//just keep running, we are only interested in your logs
while (true) {
    var secret = process.env.MY_SECRET
    console.log('MY_SECRET is: [' + secret + ']');
    sleep.sleep(5)
}
