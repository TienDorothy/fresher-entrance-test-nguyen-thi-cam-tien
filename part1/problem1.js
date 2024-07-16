'use strict';
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function customFizzBuzz(x, y) {
    for (let i = 1; i <= 100; i++) {
        let output = '';
        if (i % x === 0) {
            output += 'Foo';
        }
        if (i % y === 0) {
            output += 'Bar';
        }
        console.log(output || i);
    }
}

function main() {
    rl.question('Enter Integer for x: ', (xInput) => {
        rl.question('Enter Integer for y: ', (yInput) => {
            const x = parseInt(xInput);
            const y = parseInt(yInput);
            customFizzBuzz(x, y);
            rl.close();
        });
    });
}

main();
