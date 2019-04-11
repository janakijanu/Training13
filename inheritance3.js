var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Loan = /** @class */ (function () {
    function Loan() {
    }
    return Loan;
}());
var CarLoan = /** @class */ (function (_super) {
    __extends(CarLoan, _super);
    function CarLoan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CarLoan.prototype.getInterestRate = function () {
        return 14.0;
    };
    return CarLoan;
}(Loan));
var HomeLoan = /** @class */ (function (_super) {
    __extends(HomeLoan, _super);
    function HomeLoan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HomeLoan.prototype.getInterestRate = function () {
        return 8.0;
    };
    return HomeLoan;
}(Loan));
var obj = new HomeLoan();
console.log(obj.getInterestRate());
