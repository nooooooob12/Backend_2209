console.log('process.env', process.env);
console.clear();
console.log(process.env.COMPUTERNAME);

console.log('process.version:', process.version);
console.log('process.arch:', process.arch);
console.log('process.platform:', process.platform);
console.log('process.argv:', process.argv);

process.exit(0); // 정상종료, 값 -1은 비정상 종료 


console.log('프로세스');