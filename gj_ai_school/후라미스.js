class varClass {
    constructor() {
        this.state  = "";
        this.result =  ""; 
    }
    ret(){
        return new varClass;
    }
    on(){
        return new varClass;
    }
    resolve(meg1){
        this.result = meg1;
        this.state = "resolved";

        return this;
    }
    reject(meg2){
        this.resolve = meg2;
        this. state = "rejected"

        return this;
    }
    then(func2){
        if (this.state == "resolved"){
            func2(this.result);
        }

        return this;
    }
    catch(func3) {
        if (this.state == "rejected"){
            func3(this.result);
        }

        return this;
    }
};

let tempvar1 = new varClass()
tempvar1.reject('실패하진 않았어용');
tempvar1
.then((message)=>{console.log(message);})
.resolve('성공했어요')
.catch((message)=>{console.log(message);})
.then((message)=>{console.log(message);});