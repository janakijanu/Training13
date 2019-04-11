var Employer = /** @class */ (function () {
    function Employer() {
        this.name = 'Tejash';
        this.age = 9;
    }
    Employer.prototype.print = function () {
        console.log("HI");
    };
    return Employer;
}());
var Person = /** @class */ (function () {
    function Person() {
        this.name = 'Janu';
        this.age = 25;
    }
    Person.prototype.print = function () {
        console.log("HELLO");
    };
    return Person;
}());
function echo(obj) {
    console.log(obj.name);
    console.log(obj.age);
    obj.print();
}
var a1 = new Person();
echo(a1);
var a2 = new Employer();
echo(a2);
