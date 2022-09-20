// 호출을 하는 프로그램(모듈)
const myModule = require('./11.callee');

for(let i=0; i<=5; i++) {
    console.log(myModule.circleArea(myModule.randInt(1,10)))
}