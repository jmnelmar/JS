/*
 * Destructuring =  extract values from arrays and object,
                    then assign them to variables in a convenient way
                    [] = to perform array destructuring
                    {} = to perform object destructuring
 */

let a = 1;
let b = 2;

[a,b] = [b,a];

console.log(a);
console.log(b);

const colors = ["red","green","blue","black","white"];
console.log(colors);
[colors[0],colors[4]] = [colors[4],colors[0]];
console.log(colors);

const [firstColor, secondColor, thirdColor, ...extraColors] = colors;
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);


 const person1 = {
    firstName: "Nelson",
    lastname: "Jimenez",
    age: 30,
    job: "SWE"
 }

 const person2 = {
    firstName: "Vero",
    lastname: "Jimenez",
    age: 30,
 }

 const {firstName, lastName, age, job="Unemployed"} = person1;

 console.log(`name: ${firstName}, lastname: ${lastName}, age: ${age}, job: ${job}`);

function displayPerson({firstName, lastName, age, job="Unemployed"}){
    console.log(`name: ${firstName}, lastname: ${lastName}, age: ${age}, job: ${job}`);
}

displayPerson(person2);