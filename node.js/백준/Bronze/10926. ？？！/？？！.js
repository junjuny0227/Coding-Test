const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');

const [a] = input[0].split(' ');

console.log(`${a}??!`);
