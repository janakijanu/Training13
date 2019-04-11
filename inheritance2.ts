var loanObject={
    "loanAmount":15000,
    "duration":12,
    "irate":5,

    "computeInterest":function(){
        return this.loanAmount * this.duration * this.irate;
    }
}

var ci=loanObject.computeInterest.bind(loanObject);

var {loanAmount:la,duration:dr,irate:ir}=loanObject;

console.log(`Loan Amount : ${la}`);
console.log(`The Duration is : ${dr}`);
console.log(`The irate for this is ${ir}`)
console.log(`Computed Interest : ${ci()}`)