const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');

const a = input[0];
const b = input[1];

if (a > 0 && b > 0) console.log(1);
else if (a < 0 && b > 0) console.log(2);
else if (a < 0 && b < 0) console.log(3);
else console.log(4);
