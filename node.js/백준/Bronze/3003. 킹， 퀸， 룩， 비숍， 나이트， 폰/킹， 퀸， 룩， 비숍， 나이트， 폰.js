const fs = require('fs');
const input = fs
  .readFileSync(0, 'utf8')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const piece = [1, 1, 2, 2, 2, 8];
const answer = [];

for (let i = 0; i < piece.length; i++) answer.push(piece[i] - input[i]);

console.log(answer.join(' '));
