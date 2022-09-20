const http = require('http');
const fs = require('fs');


const server = http.createServer((req,res)=>{
    fs.readFile('veiw/03.HelloWorld.html', 'utf-8', (err,html)=>{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(html);
    });
});
server.listen(3000);