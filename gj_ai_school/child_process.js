const spawn = require('child_process').spawn;
var varPath =
['01.NodeJs\\child_process.py']

var process = spawn('python', ['-v','01.NodeJs\\child_process.py']);

process.stdout.on('data',function(data) {console.log(data.toString());})
process.stderr.on('data',function(data) {console.log(data.toString());})


