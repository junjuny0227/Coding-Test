const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');

const [num1, num2] = input[0].trim().split(' ');

reverseNum1 = Number(num1.toString().split('').reverse().join(''));
reverseNum2 = Number(num2.toString().split('').reverse().join(''));

console.log(Math.max(reverseNum1, reverseNum2));
