// array =  avariable like structure that can 
//          hold more than 1 value

let fruits = ["apple", "orange","banana"];



console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

fruits[0] = "coconut";
console.log(fruits);
console.log(fruits[0]);

fruits.push("mango");
console.log(fruits);

let fruit = fruits.pop();
console.log(fruit)
fruits.unshift("apple")
console.log(fruits);

console.log(fruits.length);
console.log(fruits.indexOf("orange"));

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

console.log(" ");

for( let i = fruits.length; i >= 0; i--){
    console.log(fruits[i]);
}


console.log("")

let numbers = [ 5, 3, 1, 4, 2];
console.log(numbers)
numbers.sort();

console.log(numbers);

numbers.reverse();
console.log(numbers);