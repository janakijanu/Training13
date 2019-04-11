"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import {PI,m as message} from './module1';
var module1_1 = require("./module1");
var module1_2 = require("./module1");
var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * module1_1.PI;
    };
    Circle.prototype.printMessage = function () {
        return module1_1.MSG;
    };
    Circle.prototype.printData = function () {
        console.log(module1_2.default);
    };
    return Circle;
}());
exports.Circle = Circle;
