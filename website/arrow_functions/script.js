/**
 * arrow functions =    a concise way to write function expressions
 *                      good for simple functions tha you use only
 *                      once (parameters) => some code
 */

const hello = (name, age) => {
    console.log(`Hello $name`);
    console.log(`You are ${age} years old`)
}

hello("Nelson",25);

setTimeout(() => {
    console.log("Hello")
}, 3000);

const numbers= [1,2,3,4,5,6];

const squares = numbers.map((element)=>{
    return Math.pow(element, 2);
});
const cubes = numbers.map((element)=>{
    return Math.pow(element,3);
});

const evens = numbers.filter((item)=>{
    return item % 2 === 0;
});

const odds = numbers.filter(
    (item) => {
        return item % 2 !== 0;
    }
);

const maxNums = numbers.reduce(
    (acumulator,item) =>{
        return Math.max(acumulator, item);
    }
);
const minNUms = numbers.reduce(
    (acumulator, item) =>{
        return Math.min(acumulator, item);
    }

);

const sum = numbers.reduce(
    (acumulator, item)=>{
        return acumulator + item;
    }
);



console.log(`squares: ${squares}`)
console.log(`cubes ${cubes}`);
console.log(`odd ${odds}`)
console.log(`max ${maxNums}`);
console.log(`mind ${minNUms}`);
console.log(`sum total ${sum}`)