const fs = require('fs');

let buffer = '\n어펜드 모드로 동작\n';

fs.writeFile('tmp/async.txt',buffer,{flag:'a'}, error=>{
    if(error){
        console.log(error);
    };
});