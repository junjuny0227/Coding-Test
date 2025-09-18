const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');

const max = Math.max(...input);

console.log(max);
console.log(input.indexOf(String(max)) + 1);
