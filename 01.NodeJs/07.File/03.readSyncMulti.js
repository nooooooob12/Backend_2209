//비권장 사항(동기적으로 파일을 읽기)

const fs = require('fs');

let bufA = fs.readFileSync('tmp/a.txt', 'utf-8');
let bufB = fs.readFileSync('tmp/b.txt', 'utf-8');
let bufC = fs.readFileSync('tmp/c.txt', 'utf-8');

console.log(bufA,bufB,bufC)
