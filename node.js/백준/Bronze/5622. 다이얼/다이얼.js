const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');

let answer = 0;
const stringArr = input[0].trim().split('');

for (let i = 0; i < stringArr.length; i++) {
  if (stringArr[i] >= 'A' && stringArr[i] <= 'C') answer += 3;
  else if (stringArr[i] >= 'D' && stringArr[i] <= 'F') answer += 4;
  else if (stringArr[i] >= 'G' && stringArr[i] <= 'I') answer += 5;
  else if (stringArr[i] >= 'J' && stringArr[i] <= 'L') answer += 6;
  else if (stringArr[i] >= 'M' && stringArr[i] <= 'O') answer += 7;
  else if (stringArr[i] >= 'P' && stringArr[i] <= 'S') answer += 8;
  else if (stringArr[i] >= 'T' && stringArr[i] <= 'V') answer += 9;
  else if (stringArr[i] >= 'W' && stringArr[i] <= 'Z') answer += 10;
}

console.log(answer);
