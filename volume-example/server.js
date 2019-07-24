var sleep = require('sleep');
var fs = require('fs');

console.log('Started!');

function listFiles(dir) {
    console.log('List files under [' + dir + ']');
    fs.readdir(dir, function(err, items) {
        console.log(items);
        for (var i=0; i<items.length; i++) {
            console.log(items[i]);
        }
    });
}

function createFile(dir) {
    fs.writeFile(dir + 'newfile.txt', 'Learn Node FS module', function (err) {
      console.log('What is this in  [' + dir + ']?', err);
      if (err) throw err;
      console.log('File is created successfully in [' + dir + ']');
    });
}

createFile('/data/test/');
createFile('/data/');
createFile('/');


listFiles('/')
listFiles('/data/')
listFiles('/data/test/')

//just keep running, we are only interested in your logs
while (true) {
    sleep.sleep(5)
}
