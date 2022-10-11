const http = require('http');
const server = http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type':'text/html; charset-utf-8000' });
    res.write('<h1>Hello Jy<h1>');
    res.end('<p>Bye Hs</p>');
});

server.listen(8080);
server.on('listening',()=>{
    console.log("8080 리스닝 중");
});
server.on('error', (err)=>{
    console.log(err);
});

const http = require('http');
const server2 = http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type':'text/html; charset-utf-8000' });
    res.write('<h1>Hello Jy<h1>');
    res.end('<p>Bye Hs</p>');
});

server2.listen(8081);
server2.on('listening',()=>{
    console.log("8080 리스닝 중");
});
server2.on('error', (err)=>{
    console.log(err);
});