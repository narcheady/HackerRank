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
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    /*
     * Write your code here.
     */
    //07:05:45PM = 19:05:45
    //07:05:45PM = 07:05:45
    //12:00:00PM = 12:00:00
    //12:00:00AM = 00:00:00
    //12:45:54PM = 12:45:54

    let m = s.substring(s.length-2,s.length)
    let fulltime = s.substring(0,s.length-2)
    let hr = fulltime.split(':')[0];
    let min = fulltime.split(':')[1];
    let sec = fulltime.split(':')[2];
    let newTime = '';

    if(m == 'AM'){
        //before 12
        if(hr == '12'){
            hr = '00';
        }
        newTime = hr + ':' + min + ':' + sec;
    }else{
        //after 12
        if(hr == '12'){
            hr = '00';
        }
        hr = parseInt(hr) + 12;
        newTime = hr + ':' + min + ':' + sec;
    }
    return newTime

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
