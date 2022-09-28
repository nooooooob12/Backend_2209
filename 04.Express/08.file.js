const express = require('express');
const bpr = require('body-parser');
const fs = require('fs');
const multer = require('multer');

const app = express();
app.use(express.static(__dirname + '/public'));
app.use(bpr.urlencoded({extended:false}));
// multer 세팅
const upload = multer({ // 옵션값 입력
    storage : multer.diskStorage({ // 디스크스토리지 옵션값 입력
        destination : __dirname + '/public/upload/', //  저장위치 설정
        filename : (req,file,next) =>{ //next 콜백 함수
            next(null,file.originalname);
        }
    })
});

app.get('/',(req,res)=>{
    res.send('<h1>파일 업로드</h1>');
});

app.get('/file',(req,res)=>{
    fs.readFile('views/08.file.html','utf-8',(err,html)=>{
        res.send(html);
    });
});

app.post('/file',upload.single('image'),(req,res)=>{
    const comment = req.body.comment;
    res.send(`<h1>comment : ${comment}</h1>`);
});

app.get('*',(req,res)=>{
    res.status(404).send('Path not found.')
});

app.listen(3000,()=>{
    console.log('Server running at http://127.0.0.1:3000');
});