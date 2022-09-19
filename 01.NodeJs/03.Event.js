process.on('exit',code => {
    console.log('프로그램 종료');
    console.log('exit code', code);
});

//예외 강제발생
process.on('uncaughtException',error => {
    console.log('예외 발생');
    console.log('예외 명:', error.name);
    console.log('예외 내용:', error.message);
});
error.error.error();

process.exit(-1);