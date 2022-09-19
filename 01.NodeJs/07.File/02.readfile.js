// 비동기적(Asynchronous)으로 파일 읽기 - 권장사항

const fs = require('fs');
fs.readFile('tmp/textfile.txt','utf8',(err,data)=>{
   /* 나중에 production(실제 서비스 상황)에서는 적용하길 권고(필수) 
   if (err){
        console.log(err);
    }
    else{console.log('파일에서 읽은 데이터',data);} */

    //파일의 에러는 잘 발생하지 않으므로 생략하는 경우도 있음. 알고 있기만 하셈
    console.log('파일에서 읽은 데이터',data);
});