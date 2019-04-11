class Employee{
    private _salary:number;
    private _name:string;

    constructor(s:number,n:string){
        this._salary=s;
        this._name=n;
    }
    set salary(n:number){
        if(n<0){
            throw "Invalid Salary";
        }
        this._salary=n;
    }
    get salary():number{
        return this._salary;
    }

    public getAllowance():number{
        return this._salary*0.45
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

let r1=new Employee(12000,'janu');
//let r2=new Employee();
r1.salary=1000;
//r2.name="janu"
// s1.salary=15000;
// s1.name="";

// console.log(s2.salary);
// console.log(s2.name);

// console.log(s1.salary);
// console.log(s1.name)
console.log(r1.getAllowance());