const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');

const [basket, count] = input[0].split(' ').map(Number);
let answer = Array.from(new Array(basket), (_, i) => i + 1);

input.slice(1).forEach((nums) => {
  const [start, end] = nums.split(' ').map(Number);
  const part = answer.slice(start - 1, end).reverse();

  answer.splice(start - 1, end - start + 1, ...part);
});

console.log(answer.join(' '));
