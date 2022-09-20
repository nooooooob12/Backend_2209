const fs = require('fs');
const { resolve } = require('path');

function readFilePromis(path) {
    return new Promise((resole, reject) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            }else {
                resolve(data);
            };
        });
    });
}

readFilePromis('../07.File/tmp/a.txt').then((val)=>{
    console.log(val);
    return readFilePromis('../07.File/tmp/b.txt');
}).then((val)=>{
    console.log(val);
    return readFilePromis('../07.File/tmp/c.txt')})
    .then(console.log);