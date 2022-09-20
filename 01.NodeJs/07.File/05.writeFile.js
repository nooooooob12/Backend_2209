const fs = require('fs');
const buffer = '비동기적 파일 사용(쓰기)';

fs.writeFile('tmp/async.txt',buffer,error => {
    if (error){
        console.log(error);
    }});