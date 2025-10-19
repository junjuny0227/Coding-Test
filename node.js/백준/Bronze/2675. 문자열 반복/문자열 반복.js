const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');

const answer = [];

for (let i = 1; i < input.length; i++) {
  const [number, word] = input[i].split(' ');
  const splitWord = word.split('');
  const newWord = [];

  for (let j = 0; j < splitWord.length; j++) {
    newWord.push(splitWord[j].repeat(number));
  }
  answer.push(newWord.join(''));
}

console.log(answer.join('\n'));
