//동기적 읽기 - 비권장 사항

const fs = require('fs');
// encoding 정보를 주지 않으면 binary로 읽음
const buffer = fs.readFileSync('tmp/textfile.txt');
console.log(buffer);
console.log(buffer.toString());
// 문자로 읽어야 하는 경우에는 인코딩 정보가 필요

const text = fs.readFileSync('tmp/textfile.txt','utf-8');
console.log(text);