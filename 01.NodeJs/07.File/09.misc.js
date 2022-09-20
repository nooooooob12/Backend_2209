const fs = require('fs');

// 디렉토리에 있는 파일 목록 알아내기
fs.readdir('tmp', (err, data) => {
    console.log(data);
});

//파일의정보(스테이트)
fs.stat('tmp/a.txt', (err, stats) => {
    console.log(stats.mtime);
    console.log(stats.size);
});

//디렉토리에 있는 파일에 대하여 최종수정시간,파일의크기,파일명 표시
fs.readdir('tmp', (err, files) => {
    for (let file of files) {
        fs.stat('tmp/' + file, (err, stats) => {
            console.log(`${stats.mtime}\t${stats.size}\t${file}`);
        });
    }
});

// file 삭제하기

fs.unlink('tmp/singiile.txt', err => {
    if (err) {
        console.log(err);
    }
});

// 파일이름 변경하기

fs.rename('tmp/single.txt', 'tmp/싱글.txt', err => {
    if (err) {
        console.log(err);
    }
});