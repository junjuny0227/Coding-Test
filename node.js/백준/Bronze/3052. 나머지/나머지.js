const fs = require('fs');
const input = fs
  .readFileSync(0, 'utf8')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const arr = input.map((num) => num % 42);
const set = new Set(arr);
const answer = [...set];

console.log(answer.length);
