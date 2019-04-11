function hello():void{
    console.log('This is simple function');
}

function multiply(n1:number,n2:number):number{
    return n1*n2;
}

function getDiscount(price:number,qty:number,rate:number):number{
    return price*qty*rate;
}

function getDiscount1(price:number,qty:number,rate=0.25):number{
    return price*qty*rate;
}

function repeat(str:string,count:number,sep?:string):void{
    var output=``;
    for(let i=1;i<=count;i++){
        if(sep == undefined)
            output+=`${str} - `
        else
            output+=`${str}  ${sep}`;
    }

    console.log(output);
}

function f1(...n):void{
    for(let i=0; i<n.length;i++){
        console.log(n[i]);
    }
}

function doSum(...numbers):number{
    let sum=0;
    for(let i=0;i<numbers.length;i++){
        sum+=numbers[i];
    }
    return sum;
}

function findMax(...numbers):number{
    let max =0 ;
    for(let i=0;i< numbers.length;i++){
        if(max<numbers[i]){
            max=numbers[i];
        }
    }
    return max;
}

f1(10,20);
f1(10,40,50,6,80);
f1();

repeat('HCL',3);
repeat('Hcl',5,' ');

hello();
console.log(multiply(10,20));

console.log("Discount "+getDiscount(10,2,0.25));

console.log("Discount "+getDiscount1(10,3));

console.log("Sum "+ doSum(1,2,3,4,5,6,7,8,9,10))

console.log("Max "+findMax(1,4,-6,-8,0,7));