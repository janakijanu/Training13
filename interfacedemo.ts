interface IData{
    name:string;
    age:number;
    print():void;
}

class Employer implements IData{
    name:string='Tejash';
    age:number=9;
    print():void{
        console.log("HI");
    }
}

class Person implements IData{
    name:string='Janu';
    age:number=25;
    print():void{
        console.log("HELLO")
    }
}

function echo(obj:IData){
    console.log(obj.name);
    console.log(obj.age);
    obj.print();
}

var a1=new Person();
echo(a1);

var a2=new Employer();
echo(a2);