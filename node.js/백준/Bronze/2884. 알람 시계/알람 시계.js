const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');

const [a, b] = input[0].split(' ').map(Number);

if (b - 45 >= 0) console.log(`${a} ${b - 45}`);
else if (a === 0 && b - 45 < 0) console.log(`23 ${60 + b - 45}`);
else console.log(`${a - 1} ${60 + b - 45}`);
