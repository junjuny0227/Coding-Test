const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');

console.log(input[0].length);
