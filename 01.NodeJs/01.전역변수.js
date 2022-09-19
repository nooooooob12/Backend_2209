const path = require('path'); 

console.log(__dirname); // 이 프로그램이 있는 위치(디렉토리)
console.log(__filename); // 이 프로그램에 파일네임

//상대경로
const relPath = 'tmp/textfile.txt';

// 절대경로
 const absPath = path.join(__dirname, 'tmp', 'textfile.txt');
 console.log(absPath);