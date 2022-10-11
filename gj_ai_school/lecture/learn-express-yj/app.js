const express = require('express');
const app = express();
const path = require('path');

app.set('port', process.env.PORT || 3000);

app.use(
    (res, req, next) => {
        console.log("모든 요청에 다 실행됩니다.");
        next();
    }
)

app.get('/',
    (req, res, next) => {
        // res.send('hello, Express!!!');
        // res.sendFile(path.join(__dirname, '/index.html'));
        console.log("Get / 요청에서만 실행됩니다.");
        next();
    },
    (req, res, next) => {
        console.log('dfdfdf');
        next();
    },
    (req, res, next) => {
        // next();
        throw new Error("에러는 에러 처리 미들웨어로 갑니다.");
    }
)

app.use(
    (err, req, res, next) => {
        console.error(err);
        res.status(500).send(err.message);
    }
);

app.listen(
    app.get('port'),
    () => {
        console.log(app.get('port'), '번 포트에서 대기중');
    }
);