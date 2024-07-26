// Activity 4: Logical Operators

// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
let condition1 = true;
let condition2 = true;
let condition3 = false;

let result1 = condition1 && condition2;
let result2 = condition1 && condition3;

console.log(result1);  // output: true
console.log(result2);  // output: false


// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
let debitCard = true;
let debitCv = false;

let result3 = debitCard || debitCv;
console.log(result3);  // output: true


// Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
let isLogin = false;
console.log(!isLogin);
