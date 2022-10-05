const condition = false;
const promise = new Promise((resolve, reject)=>{
    if (condition)
        resolve('성공');
    else 
    reject('실패');
});
// 다른코드가 들어갈 수 있음.

promise
.then((message)=>{
    console.log(message);
}).catch((err)=>{
    console.error(err);
}).finally(()=>{
    console.log();
});