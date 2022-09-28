const express = require('express');
const fs = require('fs');
const app = express();

app.get('/',(req,res)=>{
    res.send('<h1>MIME</h1>');
});

// response header 값 설정하기
app.get('/image',(req,res)=>{
    fs.readFile('public/고양이.jpg',(err,image)=>{
        res.type('image/jpg');
        res.send(image);
    });
});
app.get('/audio',(req,res)=>{
    fs.readFile('public/mp3_sample.mp3',(err,audio)=>{
        res.type('audio/mp3');
        res.send(audio);
    });
});

app.get('*',(req,res)=>{
    res.status(404).send('Path not found.')
});

app.listen(3000,()=>{
    console.log('Server running at http://127.0.0.1:3000');
});