"use strict";
// 1. Generics in Class
// not good , it is so identical
var ArrayOfNumbers = /** @class */ (function () {
    function ArrayOfNumbers(collection) {
        this.collection = collection;
    }
    ArrayOfNumbers.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfNumbers;
}());
// not good , it is so identical
var ArrayOfStrings = /** @class */ (function () {
    function ArrayOfStrings(collection) {
        this.collection = collection;
    }
    ArrayOfStrings.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfStrings;
}());
// learning Generics <TypeOfData>
var ArrayOfAnything = /** @class */ (function () {
    function ArrayOfAnything(collection) {
        this.collection = collection;
    }
    ArrayOfAnything.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfAnything;
}());
var PrintReport = /** @class */ (function () {
    function PrintReport(result) {
        this.result = result;
    }
    PrintReport.prototype.print = function () {
        console.log(this.result);
    };
    return PrintReport;
}());
var arrayOfString = new ArrayOfAnything(["a", "b", "c"]);
var arrayOfNumber = new ArrayOfAnything([1, 2, 3, 4, 5]);
// or you can speficy with general idea below , TypeScript is really intelligent, they could understand the types that u pass in
// const arrayOfString = new ArrayOfAnything(["a", "b", "c"]);
var resultString = arrayOfString.get(2);
var resultNumber = arrayOfNumber.get(3);
var printReportString = new PrintReport(resultString);
var printReportNumber = new PrintReport(resultNumber);
printReportString.print();
printReportNumber.print();
//2. How To Write generics in Function ?
// not good , it is so identical
function printString(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
// not good , it is so identical
function printNumber(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
//generics in Function
function printAnyType(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
printAnyType(["a", "1", "b"]); // this could help you identify the error immediately try below
// printAnyType<string>([1,3,4]) -> this would throw Error for identification.
//or u could do printAnyType(['a','1','b'])
//3. Generic Contraints
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.print = function () {
        console.log("I am a Car");
    };
    return Car;
}());
var House = /** @class */ (function () {
    function House() {
    }
    House.prototype.print = function () {
        console.log("I am a house");
    };
    return House;
}());
function printCarOrHouse(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i].print();
    }
}
//printCarOrHouse([1, 2, 3, 4]); Type 'number' is not assignable to type 'Printable'.ts(2322) , which means this argument will not satisfy Printable Interface
// This Problem and this idea "<T extends Printable>"" is called Generic Constraint that limits the types of T that you pass in
//Solution:
// try to think why isn't there error? -> pls think before you look for the answer below
// printCarOrHouse([new House(), new Car()]); -> No Error!
//Answer: because the instance of new House() and the instance of new Car() having print() method that satisfying the interface Printable
printCarOrHouse([new House(), new House()]);
printCarOrHouse([new Car(), new Car()]);
