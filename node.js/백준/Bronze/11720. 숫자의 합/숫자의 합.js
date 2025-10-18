const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');

const nums = input[1].split('').map(Number);
const total = nums.reduce((acc, cur) => acc + cur, 0);

console.log(total);
