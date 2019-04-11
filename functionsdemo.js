function hello() {
    console.log('This is simple function');
}
function multiply(n1, n2) {
    return n1 * n2;
}
function getDiscount(price, qty, rate) {
    return price * qty * rate;
}
function getDiscount1(price, qty, rate) {
    if (rate === void 0) { rate = 0.25; }
    return price * qty * rate;
}
function repeat(str, count, sep) {
    var output = "";
    for (var i = 1; i <= count; i++) {
        if (sep == undefined)
            output += str + " - ";
        else
            output += str + "  " + sep;
    }
    console.log(output);
}
function f1() {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    for (var i = 0; i < n.length; i++) {
        console.log(n[i]);
    }
}
function doSum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
function findMax() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var max = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (max < numbers[i]) {
            max = numbers[i];
        }
    }
    return max;
}
f1(10, 20);
f1(10, 40, 50, 6, 80);
f1();
repeat('HCL', 3);
repeat('Hcl', 5, ' ');
hello();
console.log(multiply(10, 20));
console.log("Discount " + getDiscount(10, 2, 0.25));
console.log("Discount " + getDiscount1(10, 3));
console.log("Sum " + doSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log("Max " + findMax(1, 4, -6, -8, 0, 7));
