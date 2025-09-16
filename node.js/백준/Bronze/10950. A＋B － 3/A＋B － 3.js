const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');

for (let i = 1; i < input.length; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  console.log(a + b);
}
