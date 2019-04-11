var Employee = /** @class */ (function () {
    function Employee(s, n) {
        this._salary = s;
        this._name = n;
    }
    Object.defineProperty(Employee.prototype, "salary", {
        get: function () {
            return this._salary;
        },
        set: function (n) {
            if (n < 0) {
                throw "Invalid Salary";
            }
            this._salary = n;
        },
        enumerable: true,
        configurable: true
    });
    Employee.prototype.getAllowance = function () {
        return this._salary * 0.45;
    };
    Object.defineProperty(Employee.prototype, "name", {
        get: function () {
            return this._name.toUpperCase();
        },
        set: function (n1) {
            if (n1 == "") {
                throw "Invalid Name";
            }
            this._name = n1;
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
var r1 = new Employee(12000, 'janu');
//let r2=new Employee();
r1.salary = 1000;
//r2.name="janu"
// s1.salary=15000;
// s1.name="";
// console.log(s2.salary);
// console.log(s2.name);
// console.log(s1.salary);
// console.log(s1.name)
console.log(r1.getAllowance());
