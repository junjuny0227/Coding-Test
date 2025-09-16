const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');

const [a, b] = input[0].split(' ').map(Number);
const c = Number(input[1]);

const addHour = Math.floor((b + c) / 60);
const addMinutes = (b + c) % 60;

if (addHour === 0 && a !== 23) console.log(`${a} ${addMinutes}`);
else if (addHour >= 1) {
  if (a + addHour >= 24) console.log(`${a + addHour - 24} ${addMinutes}`);
  else console.log(`${a + addHour} ${addMinutes}`);
}
