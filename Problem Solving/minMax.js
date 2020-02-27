'use strict';

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

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    arr.sort(function(a, b) {
        return a - b;
    });
    
    const length = arr.length;

    var max = 0,
        min = 0;

    for(var i=1;i<length;i++){
        max += arr[i]; 
    }
    
    for(var i=0;i<length-1;i++){
        min += arr[i];
    }

    return [min,max]
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    var result = miniMaxSum(arr)
    console.log(result[0],result[1]);
}
