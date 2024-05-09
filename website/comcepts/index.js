//console.log(`Hello`);
//console.log(`!`)

//window.alert(`This is an alert`)
//window.alert(`!`)

// this is a comment

//document.getElementById("myH1").textContent = 'Hello'
//document.getElementById("myP").textContent = "!"

/*
    variable = A container that stores a value
               Behaves as if it were the value it contains.
    
    1. declaration  let x;
    2. assigment    x = 100
*/

//let fullName = "Nelson Jimenez";
//let age = 25;
//let student = false;

//document.getElementById("p1").textContent = `Your name is ${fullName}`;
//document.getElementById("p2").textContent = `Your age is ${age}`;
//document.getElementById("p3").textContent = `You are a student ${student}`;

/* 
    Aritmetic operatos

    + add
    - substract
    * multiply
    ** exponent 
    / division
    % module 
    += augmented assigment 
    -= decremental assigment
    *= mltiply assignment
    **= exponential assigment
    %= module assigment
    ++ incremental operator
    -- decremental operator

    operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication & division & module
    4. addition & substraction

    Window prompt

    1. EASY WAY = window prompt
    2. PROFESSIONAL WAY = HTML textbox
 */

/* 1.
    let username;

    username = window.prompt("what's your username")
    console.log(username)
*/


/* 2.
    let username;
    document.getElementById("mysubmit").onclick = function(){
        username = document.getElementById("mytext").value;
        console.log(username)
    }
*/

// type conversion =    change the datatype of a value to another
//                      (string, numbers, booleans)
/*
let age = window.prompt("How old are you");
age = Number(age);
age += 1
console.log(age, typeof age)
*/

/*
const = variable that can't be changed
*/

const PI = 3.4159
let radius;
let circunference;

//radius = window.prompt("Enter the radius of a circlem: ")
//radius = Number(radius)

//circunference = 2 * pi * radius
//console.log(circunference)

document.getElementById("mysubmit").onclick = function(){
    radius = document.getElementById("mytext").value;
    radius = Number(radius)
    circunference = 2 * PI * radius
    document.getElementById("myh3").textContent = circunference + "cm";
}