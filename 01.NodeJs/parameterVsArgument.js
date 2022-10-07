const func1 = callback=>{
    console.log(callback);
}
func('청춘');


const func2 = callback => {callback = callback();}
func2(()=> { console.log(param1);})