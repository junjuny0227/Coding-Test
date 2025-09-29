const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');

const [basket, count] = input[0].split(' ').map(Number);
const answer = Array(basket).fill(0);

for (let idx1 = 1; idx1 < input.length; idx1++) {
  const [i, j, k] = input[idx1].split(' ').map(Number);

  for (let idx2 = i - 1; idx2 < j; idx2++) answer[idx2] = k;
}

console.log(answer.join(' '));
