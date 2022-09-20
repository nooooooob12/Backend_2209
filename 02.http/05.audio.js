const http = require('http');
const fs = require('fs');


const server = http.createServer((req,res)=>{
    fs.readFile('media/오디오.mp3',(err,audio)=>{
        res.writeHead(200, {'Content-Type': 'audio/mp3'});
        res.end(audio);
    });
});
server.listen(3000);