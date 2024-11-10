const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    for (let i = 0; i < input; i++) {
        for (let j = 0; j < input; j++) if (i >= j) process.stdout.write("*");
        console.log()
    }
});