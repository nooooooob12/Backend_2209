
const fs = require('fs');


//순서보장이 되지 않는 비동기적 파일읽기
console.log('순서보장이 안되는 방법');
fs.readFile('tmp/a.txt', 'utf-8', (error,bufA)=>{
    console.log(bufA);
});

fs.readFile('tmp/b.txt', 'utf-8', (error,bufB)=>{
    console.log(bufB);
});

fs.readFile('tmp/c.txt', 'utf-8', (error,bufC)=>{
    console.log(bufC);
});

//순서보장 되는 비동기적 파일읽기 => 콜백(callback)지옥
fs.readFile('tmp/a.txt', 'utf-8', (err,bufA)=>{
    console.log('순서보장이 되는 방법1');
    console.log(bufA);
    fs.readFile('tmp/b.txt', 'utf-8', (err,bufB)=>{
        console.log(bufB);
        fs.readFile('tmp/c.txt', 'utf-8', (err,bufC)=>{
            console.log(bufC);
        });
    });
});

fs.readFile('tmp/a.txt', 'utf-8', (err,bufA)=>{
    fs.readFile('tmp/b.txt', 'utf-8', (err,bufB)=>{
        fs.readFile('tmp/c.txt', 'utf-8', (err,bufC)=>{
            console.log('순서보장이 되는 방법2');
            console.log(bufA);
            console.log(bufB);
            console.log(bufC);
        });
    });
});
