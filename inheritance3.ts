abstract class Loan{
    abstract getInterestRate():number;
}

class CarLoan extends Loan{
    getInterestRate():number{
        return 14.0;
    }
}

class HomeLoan extends Loan{
    getInterestRate():number{
        return 8.0;
    }
}

var obj=new HomeLoan();
console.log(obj.getInterestRate());

var obj=new CarLoan();
console.log(obj.getInterestRate());

