// 1. Generics in Class

// not good , it is so identical
class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number) {
    return this.collection[index];
  }
}

// not good , it is so identical
class ArrayOfStrings {
  constructor(public collection: string[]) {}
  get(index: number) {
    return this.collection[index];
  }
}

// learning Generics <TypeOfData>
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number) {
    return this.collection[index];
  }
}

class PrintReport<T> {
  constructor(public result: T) {}

  print(): void {
    console.log(this.result);
  }
}
const arrayOfString = new ArrayOfAnything<string>(["a", "b", "c"]);
const arrayOfNumber = new ArrayOfAnything<number>([1, 2, 3, 4, 5]);
// or you can speficy with general idea below , TypeScript is really intelligent, they could understand the types that u pass in
// const arrayOfString = new ArrayOfAnything(["a", "b", "c"]);

const resultString = arrayOfString.get(2);
const resultNumber = arrayOfNumber.get(3);

const printReportString = new PrintReport(resultString);
const printReportNumber = new PrintReport(resultNumber);
printReportString.print();
printReportNumber.print();

//2. How To Write generics in Function ?

// not good , it is so identical
function printString(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// not good , it is so identical
function printNumber(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

//generics in Function
function printAnyType<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnyType<string>(["a", "1", "b"]); // this could help you identify the error immediately try below
// printAnyType<string>([1,3,4]) -> this would throw Error for identification.

//or u could do printAnyType(['a','1','b'])

//3. Generic Contraints

class Car {
  print() {
    console.log("I am a Car");
  }
}

class House {
  print() {
    console.log("I am a house");
  }
}

// Add on constraint(interface) that it promises and tells TypeSscript there will be a print method available
interface Printable {
  print(): void;
}
function printCarOrHouse<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

//printCarOrHouse([1, 2, 3, 4]); Type 'number' is not assignable to type 'Printable'.ts(2322) , which means this argument will not satisfy Printable Interface
// This Problem and this idea "<T extends Printable>"" is called Generic Constraint that limits the types of T that you pass in

//Solution:
// try to think why isn't there error? -> pls think before you look for the answer below
// printCarOrHouse([new House(), new Car()]); -> No Error!

//Answer: because the instance of new House() and the instance of new Car() having print() method that satisfying the interface Printable

printCarOrHouse<House>([new House(), new House()]);
printCarOrHouse<Car>([new Car(), new Car()]);
