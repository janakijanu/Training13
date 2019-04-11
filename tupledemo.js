var prices;
prices = [200, 300, 400];
console.log(prices);
prices.push(900, 1000);
for (var _i = 0, prices_1 = prices; _i < prices_1.length; _i++) {
    var val = prices_1[_i];
    console.log(val);
}
var a = 20;
var b = 40;
var mynumbers = [a, b, 90, 80]; //Structing
var x = mynumbers[0], y = mynumbers[1], z = mynumbers.slice(2); //Destructing
console.log(x);
console.log(y);
console.log(z);
var cities = ['Chennai', 'Hyderabad', 'Delhi', 'Pune'];
var l = cities[0], m = cities[1], n = cities[2], other = cities.slice(3);
console.log("Home Town : " + l);
console.log("Work Place : " + m);
console.log("Capital : " + n);
console.log(other);
var empData = [101, 'Janu', 01, 'F'];
var empid = empData[0], empname = empData[1], salary = empData[2], gender = empData[3];
console.log(empid);
console.log(empname);
console.log(salary);
console.log(gender);
