// ternary operator =   a shortcut to if{} and else{} statements
//                      helps to assign a variable based on a condition
//                      condition ? codeIfTrue : codeIfFalse;

//let time = 9;
//let greeting = time < 12 ? "Good Morning" : "Good afternoon!";
//console.log(greeting);

let isStudent;

let message = isStudent ? "You are a student" : "You are not a student";
console.log(message);

let purchaseAmount = 125;

let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount*discount/100}`);
