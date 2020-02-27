'use strict';

const fs = require('fs');
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the staircase function below.
function staircase(n) {

  let stairs = '';
  let hash = '#';
  let space = ' ';
 
  for(let i = 1; i <= n; i++){
    stairs += space.repeat(n-i) + hash.repeat(i) + '\n';
  }

  return stairs;
}

function main() {
    const n = parseInt(readLine(), 10);

    console.log(staircase(n));
}
