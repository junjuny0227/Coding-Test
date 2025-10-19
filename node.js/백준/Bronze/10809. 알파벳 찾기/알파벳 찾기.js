const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');

const answer = [];
const word = input[0].split('');

for (let i = 97; i < 123; i++) {
  if (word.includes(String.fromCharCode(i)))
    answer.push(word.indexOf(String.fromCharCode(i)));
  else answer.push(-1);
}

console.log(answer.join(' '));
