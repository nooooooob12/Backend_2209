const express = require('express');
const fs = require('fs');
const ejs = require('ejs'); // Extended Java Script, template Engine
const app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine','ejs') // 뷰 엔진은 ejs로 돌리겠다!
app.set('views', __dirname + '/views')

app.get('/',(req,res)=>{
    res.send('<h1>Static</h1>');
});

// response header 값 설정하기
app.get('/static',(req,res)=>{
    fs.readFile('views/05.static.html','utf-8',(err,html)=>{
        res.send(html);
    });
});

app.get('/ejs',(req,res)=>{
    ejs.renderFile('./views/05.static.ejs',{data:'EJS에서 보내는 데이터'},(err,html)=>{
        res.send(html);
    });
});

app.get('*',(req,res)=>{
    res.status(404).send('Path not found.')
});

app.listen(3000,()=>{
    console.log('Server running at http://127.0.0.1:3000');
});