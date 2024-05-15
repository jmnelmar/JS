/*
 .map() =   accepts a callback and applies that function
            to each element of an array, then return a new array
        
*/

const numbers = [1,2,3,4,5];
const squares = numbers.map(square);
const cubes = numbers.map(cube);

console.log(numbers);
console.log(squares);
console.log(cubes)

function square(element){
    return Math.pow(element,2);
}

function cube(element){
    return Math.pow(element, 3);
}

const students = ["Nelson", "Veronica", "Keiry", "Martha"];
const studentsUppe = students.map(upperCase);
const studentsLow = students.map(lowerCase);

console.log(students);
console.log(studentsUppe);
console.log(studentsLow);

function upperCase(element){
    
    return element.toUpperCase();
}

function lowerCase(element){
    return element.toLowerCase();
}