var Circle = /** @class */ (function () {
    function Circle() {
        this._radius = 0;
    }
    Circle.prototype.getArea = function () {
        return this._radius * this._radius * Circle.PI;
    };
    Circle.prototype.print = function () {
        console.log("This Radius is " + this._radius);
        console.log("This Area is " + this.getArea());
    };
    Circle.PI = 3.14;
    return Circle;
}());
var c1 = new Circle();
c1._radius = 10;
c1.print();
//console.log(`The Radius is ${c1.radius}`);
//console.log(`The Area is ${c1.getArea()}`);
var c2 = new Circle();
c2._radius = 20;
c2.print();
