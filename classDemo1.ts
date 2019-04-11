class Circle{
    _radius:number=0;
    static PI:number=3.14;
    getArea():number{
        return this._radius*this._radius*Circle.PI;
    }
    print():void{
        console.log(`This Radius is ${this._radius}`);
        console.log(`This Area is ${this.getArea()}`)
    }
}



let c1=new Circle();
c1._radius=10;
c1.print();
//console.log(`The Radius is ${c1.radius}`);
//console.log(`The Area is ${c1.getArea()}`);

let c2=new Circle();
c2._radius=20;
c2.print();