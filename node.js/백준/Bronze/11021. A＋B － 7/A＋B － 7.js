const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');

const results = [];
for (let i = 1; i < input.length; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  results.push(`Case #${i}: ${a + b}`);
}
console.log(results.join('\n'));
