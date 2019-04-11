//import {PI,m as message} from './module1';
import {PI,MSG as message} from './module1';
import data from './module1'

class Circle{
    radius:number;
    getArea():number{
        return this.radius*this.radius*PI;
    }
    printMessage():string{
        return message;
    }
    printData(){
        console.log(data);
    }
}
//var c1=new Circle();
//console.log(c1.getArea());

export{Circle}