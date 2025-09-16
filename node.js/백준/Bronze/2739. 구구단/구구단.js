const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');

const a = input[0].split(' ').map(Number);

for (let i = 1; i <= 9; i++) console.log(`${a} * ${i} = ${a * i}`);
