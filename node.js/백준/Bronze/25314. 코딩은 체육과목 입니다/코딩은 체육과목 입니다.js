const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');

const a = input[0].split(' ').map(Number);
const answer = ['int'];
const count = a / 4;

for (let i = 0; i < count; i++) answer.unshift('long');

console.log(answer.join(' '));
