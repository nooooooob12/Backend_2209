const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');
const view = require('./view/index');
const template = require('./view/template');

http.createServer((req, res) => {
    let pathname = url.parse(req.url).pathname;
    let query = url.parse(req.url, true).query;
    switch (pathname) {
        case '/':
            if (query.id === undefined) { //초기화면
                fs.readdir('data', (err, files) => {
                    const title = '웹 기술';
                    const list = template.listGen(files);
                    const contents = template.HOMT_CONTENTS.replace('\n', '<br/>');
                    const html = view.index(title, list, contents);
                    res.end(html);
                });

            } else {                      // 개별 아이템에 대한 화면
                fs.readdir('data', (err, files) => {
                    const title = query.id;
                    const list = template.listGen(files);
                    const filename = `data/${query.id}.txt`;
                    fs.readFile(filename, 'utf-8', (err, data) => {
                        let contents = data.replace('\n', '<br/>');
                        const html = view.index(title, list, contents);
                        res.end(html);
                    });
                });
            }

            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end();
    }
}).listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});