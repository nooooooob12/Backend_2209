const readline = require('readline');
const r1 = readline.createInterface({
    input : process.stdin, //standard input, terminal(keyboard) 지정
    output : process.stdout // standard out put, terminal(monitor)
});
r1.setPrompt('숫자를 입력하세요 > ');
r1.prompt();


// 'line'이벤트 :사용자가 엔터를 쳤을때 발생하는 이벤트
r1.on('line', buffer => {
    let num = parseInt(buffer);
    console.log('입력한 숫자는 ' + num + '입니다.');

    r1.close() // 끝남을 명시적으로 선언
});