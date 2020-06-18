const { people, ages } = require('./people'); // Can also be imported without destructuring

console.log(people, ages); // Needs to be manually exported

const os = require('os'); // Default node package

console.log(os.platform(), os.homedir());