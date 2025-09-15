const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');

const [a, b] = input[0].split(' ').map(Number);

console.log(a * b);
