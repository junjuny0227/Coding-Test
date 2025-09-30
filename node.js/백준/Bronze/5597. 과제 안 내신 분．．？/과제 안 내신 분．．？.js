const fs = require('fs');
const input = fs
  .readFileSync(0, 'utf8')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const arr = Array.from(new Array(30), (_, i) => i + 1);

const answer = arr.filter((num) => !input.includes(num));

console.log(answer.join('\n'));
