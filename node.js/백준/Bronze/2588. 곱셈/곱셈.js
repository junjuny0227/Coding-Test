const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');

const a = input[0];
const b = input[1];
const [b1, b2, b3] = b.split('').map(Number);

console.log(a * b3);
console.log(a * b2);
console.log(a * b1);
console.log(a * b);
