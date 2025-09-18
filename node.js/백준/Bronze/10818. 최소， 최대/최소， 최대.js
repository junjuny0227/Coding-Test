const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');

const arr = input[1].split(' ').map(Number);

console.log(`${Math.min(...arr)} ${Math.max(...arr)}`);
