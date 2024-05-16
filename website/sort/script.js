/*
 * sort() = method used to sort elements of an array in place.
            sorts elements as string in lexographic order, not alphabetical
            lexicogrphics = (alphabet + numbers + symbols) as strings
 */

let fruits = ["apple","orange","banana","coconut","pineaple"];

fruits.sort();

console.log(fruits)

let numbers = [1,10,2,9,3,8,4,7,5,6];
numbers.sort();
console.log(numbers);

numbers = [1,10,2,9,3,8,4,7,5,6];
console.log(numbers)

numbers.sort((a,b) => a - b );
console.log(numbers);

numbers.sort((a,b) => b - a);
console.log(numbers);

const people = [
    {name:"Nelson", age: 30, gpa:3.0},
    {name:"Veronica", age: 28, gpa:1.5},
    {name:"Ana", age: 42, gpa:1.6},
    {name:"Keiry", age: 12, gpa:2.5},
    {name:"Sandy", age: 27, gpa:4.0}
];

//people.sort((a,b) => a.age - b.age);
//sconsole.log(people);

//people.sort((a,b) => b.age - a.age);
//console.log(people);

people.sort((a,b) => a.name.localeCompare(b.name));
console.log(people);