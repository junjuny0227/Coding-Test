const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');

const words = input[0].trim().split(' ');

if (input[0].trim() === '') console.log(0);
else console.log(words.length);
