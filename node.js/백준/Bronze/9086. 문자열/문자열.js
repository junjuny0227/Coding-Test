const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');

const answer = [];

for (let i = 1; i < input.length; i++) {
  answer.push(input[i][0] + input[i][input[i].length - 1]);
}

console.log(answer.join('\n'));
