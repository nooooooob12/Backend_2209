const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('<h1>Hello,World!!!</h1>');
});

// 파라메타 받기 : http://localhost:3000/query?id=123
app.get('/query',(req,res)=>{
    const id = req.query.id; // ?id=123
    res.send(`<h1>/query:id - ${id}</h1>`);
});

// 파라메타 받기 : http://localhost:3000/params/id/123 - path로 받기
app.get('/params/id/:id',(req,res)=>{
    const id = req.params.id;
    res.send(`<h1>/params/id:  id - ${id}</h1>`);
})

app.get('*',(req,res)=>{
    res.status(404).send('Path not found.')
})

app.listen(3000,()=>{
    console.log('Server running at http://127.0.0.1:3000');
})