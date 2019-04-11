var age:number;
var myname:string='HCL';
var elgible:boolean=true;
var x:null;
var y:undefined;
var data:any;

console.log(age);
console.log(myname);
console.log(elgible);
console.log(data);
console.log(x)
console.log(y)

function simpleGreet(){
    console.log("Hi....Welcome")
}


function nameGreet(str:string){
    var res=`Hi ${str} how are you .. Welcome `;
    console.log(res)
}

function doMultiply(n1:number,n2:number){
    console.log(`Product of ${n1} and ${n2} is ${n1*n2}`);
}

function repeat(name:string,count:number):string{
    var res=``;
    for(var i:number=1; i<=count; i++){
        res=res+`${name}-`;
    }
    return res;
}

simpleGreet();
nameGreet("hcl");
doMultiply(10,20);
console.log(repeat('hello', 10));

var prices:number[];
prices=[2.0, 450.0, 666.00, 45, 10];
console.log(prices);
prices.push(8.0);

for(var p of prices){
    console.log(p);
}
