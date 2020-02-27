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

// Complete the plusMinus function below.
function plusMinus(arr) {
    const length = arr.length;
    var pCount = 0,
        nCount = 0,
        zCount = 0;
    for(var i = 0; i < length ; i++){
        if(Math.sign(arr[i]) == 1){
            pCount += 1;
        }else if(Math.sign(arr[i]) == -1){
            nCount += 1;
        }else{
            zCount += 1;
        }
        //console.log(pCount,nCount,zCount,arr[i])

    }

    return [(pCount/length).toFixed(6),(nCount/length).toFixed(6),(zCount/length).toFixed(6)]

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    var result = plusMinus(arr);

    ws.write(result[0] + '\n' + result[1] + '\n' + result[2] + '\n');

    ws.end();
}

/*
Input
10
1 -3 -4 -4 -2 -3 2 0 0 0
Output
0.200000
0.500000
0.300000
*/