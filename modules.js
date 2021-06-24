const {ages , people , address }  = require('./people');

console.log(ages , people , address);

// need to findout os system info

const os = require('os');
console.log(os.platform(), os.homedir() , os.networkInterfaces(), os.version());