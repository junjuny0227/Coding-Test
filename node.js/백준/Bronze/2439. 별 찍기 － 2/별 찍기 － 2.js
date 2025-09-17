const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');

const a = input[0].split(' ').map(Number);
const results = [];

for (let i = a - 1; i >= 0; i--) {
  results.push(`${' '.repeat(i)}${'*'.repeat(a - i)}`);
}

console.log(results.join('\n'));
