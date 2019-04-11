var Employee = /** @class */ (function () {
    function Employee() {
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
var s1 = new Employee();
var s2 = new Employee();
s1.salary = 15000;
s1.name = "janu";
console.log(s1.salary);
console.log(s1.name);
s2.salary = 1000;
console.log(s2.salary);
s2.name = "";
console.log(s2.name);
