const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('<h1>Hello,World!!!</h1>');
});

// routing path별 처리해주는 함수.


//Status code 404를 보내는 라인
app.get('*',(req,res)=>{
    res.status(404).send('Path not found.')
})

app.listen(3000,()=>{
    console.log('Server running at http://127.0.0.1:3000');
})