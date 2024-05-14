// spread operator =    ... allows an iterable such as an
//                      array or string to be expanded
//                      into separate elements
//                      (unpack the elements)


let numbers = [1,2,3,4,5];

let maximun = Math.max(numbers);//NaN error
console.log(maximun)
maximun = Math.max(...numbers);
console.log(maximun)

let minimun = Math.min(...numbers);
console.log(minimun);

let fruits = ["apple", "orange","banana"];
let newFruits = [...fruits];
console.log(newFruits);

let vegetables = ["carrots","celery","potatpes"];
let foods = [...fruits, ...vegetables];

console.log(foods);

