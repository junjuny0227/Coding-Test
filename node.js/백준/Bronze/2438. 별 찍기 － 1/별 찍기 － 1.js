const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');

const a = input[0].split(' ').map(Number);
const results = [];

for (let i = 1; i <= a; i++) {
  results.push('*'.repeat(i));
}

console.log(results.join('\n'));
