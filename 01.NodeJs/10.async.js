const async = require('async');
const fs = require('fs');
/*  아래의 코드는 순서보장이 안됨
fs.readFile('tmp/a.txt', 'utf-8', (error,bufA)=>{
    console.log(bufA);
});

fs.readFile('tmp/b.txt', 'utf-8', (error,bufB)=>{
    console.log(bufB);
});

fs.readFile('tmp/c.txt', 'utf-8', (error,bufC)=>{
    console.log(bufC);
}); */

async.parallel({
    bufA: function (callback) {
        fs.readFile('07.File/tmp/a.txt', 'utf-8', callback);
    },
    bufB: function (callback) {
        fs.readFile('07.File/tmp/b.txt', 'utf-8', callback);
    },
    bufC: function (callback) {
        fs.readFile('07.File/tmp/a.txt', 'utf-8', callback);
    }
}, (err, result) => {
    console.log(result.bufA);
    console.log(result.bufB);
    console.log(result.bufC);
});