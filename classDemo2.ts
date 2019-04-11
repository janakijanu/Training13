class Employee{
    _salary:number;
    _name:string;

    set salary(n:number){
        if(n<0){
            throw "Invalid Salary";
        }
        this._salary=n;
    }
    get salary():number{
        return this._salary;
    }

    set name(n1:string){
        if(n1==""){
            throw "Invalid Name"
        }
        this._name=n1;
    }
    get name():string{
        return this._name.toUpperCase();
    }
}

let s1=new Employee();
let s2=new Employee();

s1.salary=15000;
s1.name="janu";

console.log(s1.salary);
console.log(s1.name)

s2.salary=1000;
console.log(s2.salary);
s2.name=""
console.log(s2.name);