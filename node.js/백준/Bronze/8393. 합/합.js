const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');

const a = input[0].split(' ').map(Number);
let total = 0;

for (let i = 1; i <= a; i++) total += i;

console.log(total);
