const fs = require('fs');
const readline = require('readline');

// 파일네임 파라미터로 받아오기
if (process.argv.length < 3) {
    console.log('사용법:node thisFile.js filename');
    process.exit();
}
const filename = process.argv[2];

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r1.prompt('> ')
r1.on('line', buffer => {
    fs.writeFile(filename,buffer,err=>{
        if (err)
            console.log(err);
    });
    r1.close() // 끝남을 명시적으로 선언
});