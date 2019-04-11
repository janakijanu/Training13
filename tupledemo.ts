let prices: number[];
prices=[200,300,400];

console.log(prices);

prices.push(900,1000);

for(let val of prices){
    console.log(val);
}

let a:number=20;
let b:number=40;

let mynumbers:number[]=[a,b,90,80];//Structing

let[x,y,...z]=mynumbers;//Destructing

console.log(x);
console.log(y);
console.log(z);

let cities:string[]=['Chennai','Hyderabad','Delhi','Pune'];

let[l,m,n,...other]=cities;

console.log("Home Town : "+l);
console.log("Work Place : "+m);
console.log("Capital : "+n);
console.log(other);

let empData:any[]=[101,'Janu',01,'F']

let[empid,empname,salary,gender]=empData;

console.log(empid);
console.log(empname);
console.log(salary);
console.log(gender);