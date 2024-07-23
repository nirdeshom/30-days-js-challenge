// Task 1: Declare a variable using var, assign it a number, and log the value to the console.
var score = 955;
console.log(score); // output: 955


// Task 2: Declare a variable using let, assign it a string, and log the value to the console.
let bestChannel = "Chai Aur Code";
console.log(bestChannel); // Chai Aur Code


// Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
const isLogedIn = true;
console.log(isLogedIn); // true


// Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
let bestNumber = 64;
console.log(typeof bestNumber); // Number

let courseAuthor = "Hitesh Chudariy";
console.log(typeof courseAuthor); // String

const hitesh = true;
console.log(typeof hitesh); // Booleane

const myObject = {
  name: "Nirdesh",
  age: 21,
};
console.log(typeof myObject); // Object

const arr = [1, 2, 3, 4, 5, "Shankey"];
console.log(typeof arr); // Array


// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
let name = "Nirdesh";
name = "Chai Aur Code";
console.log(name); // Chai Aur Code


// Task 6: Try reassigning a variable declared with const and observe the error.
const channel = "Chai Aur Code";
// channel = "xyz";
console.log(channel); // TypeError: Assignment to constant variable.
