function delayP(ms) {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve("성공!");
            }, ms);
        } catch (e) {
            reject("실패!");
        }
    });
}

delayP(1000)./* then((val)=>{
    console.log(val) 
})*/then(console.log).catch(console.log)