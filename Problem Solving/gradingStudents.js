'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {

    let length = grades.length;
    for (let i=0;i<length;i++){
        if(grades[i] % 5 != 0 && grades[i] % 5 >= 3){ //grades not multiple of 5 and to be rounded
            if(grades[i] + 5 - (grades[i] % 5) < 40){
                //do nothing
            }else{
                grades[i] = grades[i] + 5 - (grades[i] % 5);
            }
        }else{
            //nothing
        }
    }
    return grades

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const gradesCount = parseInt(readLine().trim(), 10);

    let grades = [];

    for (let i = 0; i < gradesCount; i++) {
        const gradesItem = parseInt(readLine().trim(), 10);
        grades.push(gradesItem);
    }

    const result = gradingStudents(grades);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
/*
INPUT
73
67
38
33
OUTPUT
[ 75, 67, 40, 33 ]
*/