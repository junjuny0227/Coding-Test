const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');

const num = Number(input[0]);
const scores = input[1].split(' ').map(Number);
const max = Math.max(...scores);
let total = 0;

for (let i = 0; i < scores.length; i++) total += (scores[i] / max) * 100;

const fixed = (total / num).toFixed(2);
const parsed = parseFloat(fixed);

console.log(Number.isInteger(parsed) ? `${parsed}.0` : parsed.toString());
