const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');

const price = Number(input[0]);
let total = 0;

for (let i = 2; i < input.length; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  total += a * b;
}

if (price === total) console.log('Yes');
else console.log('No');
