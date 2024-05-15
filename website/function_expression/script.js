// function declaration =   define a reusable block of code
//                          that perform a specific task

function hello(){
    console.log("hello");
}

// function expresions =    a way to define functions as
//                          values or variables
/*
1. callbacks in asynchronous operations
2. Higher-Order Functions
3. Closures
4. Event Listeners
 */

const hello2 = function(){
    console.log("hello 2");
}

hello2();
setTimeout(hello, 3000);

setTimeout(() => {
   console.log("Hello 3") 
}, 4000);

const numbers = [1,2,3,4,5,6];

const squares = numbers.map(
    (element) => {
        return Math.pow(element,2);
    }
);

console.log(`Squares: ${squares}`);

const evenNumbers = numbers.filter(
    (element) =>{
        return element % 2 === 0;
    }
);

console.log(`even numbers: ${evenNumbers}`);

const oddNumbers = numbers.filter(
    (element) => {
        return element % 2 !== 0;
    }
);

console.log(`odd numbers: ${oddNumbers}`);

const total = numbers.reduce(
    (acumulator, item) => {
        return acumulator + item;
    }
);
console.log(`Total ${total}`);