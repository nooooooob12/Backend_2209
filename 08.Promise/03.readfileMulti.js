const fs = require('fs');
fs.readFile('../07.File/tmp/a.txt', 'utf-8', (err,bufA)=>{
    console.log('순서보장이 되는 방법1');
    console.log(bufA);
    fs.readFile('../07.File/tmp/b.txt', 'utf-8', (err,bufB)=>{
        console.log(bufB);
        fs.readFile('../07.File/tmp/c.txt', 'utf-8', (err,bufC)=>{
            console.log(bufC);
        });
    });
    console.log(bufA);
});