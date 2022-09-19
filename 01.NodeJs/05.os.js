const os = require('os');
console.log(os.cpus());
const cpus = os.cpus();
console.log(cpus.length);
console.log(os.totalmem(),os.freemem());
console.log(os.networkInterfaces());