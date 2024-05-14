/*
callback =  a function that is passed as an argument
            to another function

            used to handle asynchronous operations
            1. Reading a file
            2. Network requests
            3. Interacting with databases

*/

hello(wait);

function hello(callback){
    console.log("Hello")
    callback();
}

function leave(){
    console.log("Leave")
}

function wait(){
    console.log("wait!")
}

function goodbye(){
    console.log("Goodbye!")
}


function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}

function displayPage(result){
    document.getElementById("myh1").textContent = result;
}

sum(displayConsole, 5, 4);
sum(displayPage,2,3);