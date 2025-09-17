const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');

const [a, b] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

const results = arr.filter((num) => num < b);

console.log(results.join(' '));
