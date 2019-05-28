var environment = JSON.stringify(process.env, null, 4); // (Optional) beautiful indented output.
console.log('Environment', environment);

//get response from environment
var response = process.env.http_response
console.log('Response is: [' + response + ']');

