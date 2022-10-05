

console.log("start")

class Human{
    constructor(param1){
        this.type = param1;
    }
    static isHuman(param1){
       let tempVar = param1 instanceof Human;
        return tempVar;
    }
    breath(){
        alert(h-a-a-a-m);
    }
}
class Zero extends Human {
    constructor(param1,param2,param3){
        super(param1);
        this.firstname = param2;
        this.lastname = param3;
    }

    sayName(){
        super.breath();
        alert(`${this.firstname},${this.lastname}`);
    }
}

const newZero = new Zero('human','zero','cho');
Human.isHuman(newZero);


function wrapper(){
    let varLet5 =1;
    const varConst5 = 2;
    var varVar5 =3;
    varNone5=4;
    function inner(){
        let varLet6 =1;
        const varconst6=2
        var varVar6 =3;
        varNone6=4;

    }
    inner();
}
wrapper();
console.log("start here")
var relationship1 = {
    name:'zero',
    friends:['nero','hero','xero'],
    logFriends: function(){
        var that = this;
        this.friends.forEach(
            function(param1){console.log(that.name,param1)}
        )
    }
}
relationship1.logFriends();

console.log("start here")
var relationship2 = {
    name:'zero',
    friends:['nero','hero','xero'],
    logFriends(){
        var that = this;
        this.friends.forEach(
            (param2) => {console.log(this.name,param2)}
        )
    }
}
relationship2.logFriends();



let varLet1=1;
var varVar1=2;
{
    {
        let varLet2 = 1;
        var varVar2 = 2;
    }

    let varLet3=2;
    var varVar3=1;
}

function func(){
    var varVar4=1;
    let varLet4=2;
};
func();