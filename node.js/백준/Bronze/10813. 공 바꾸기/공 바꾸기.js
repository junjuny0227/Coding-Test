const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');

const [basket, count] = input[0].split(' ').map(Number);
const answer = Array.from(new Array(basket), (x, i) => i + 1);

for (let idx1 = 1; idx1 < input.length; idx1++) {
  const [i, j] = input[idx1].split(' ').map(Number);
  let temp = null;

  temp = answer[i - 1];
  answer[i - 1] = answer[j - 1];
  answer[j - 1] = temp;
}

console.log(answer.join(' '));
