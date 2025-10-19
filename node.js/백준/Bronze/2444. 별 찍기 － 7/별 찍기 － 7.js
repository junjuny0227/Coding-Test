const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();

for (let i = 0; i < input; i++) {
  let line = '';

  for (let j = i; j < input - 1; j++) line += ' ';
  for (let k = 0; k < i * 2 + 1; k++) line += '*';

  console.log(line);
}

for (let i = input - 2; i >= 0; i--) {
  let line = '';

  for (let j = i; j < input - 1; j++) line += ' ';
  for (let k = 0; k < i * 2 + 1; k++) line += '*';

  console.log(line);
}
