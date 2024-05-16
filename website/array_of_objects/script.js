fruits = [
    {name:"apple",color:"red",calories:95},
    {name:"orange",color:"orange",calories:45},
    {name:"banana",color:"yellow",calories:105},
    {name:"coconut",color:"white",calories:159},
    {name:"pineaple",color:"yellow",calories:37}
];

console.log(fruits[3].name)

fruits.push({name:"grapes",color:"purple",calories:62});

console.log(fruits);

fruits.pop();

console.log(fruits);

//fruits.splice(1,2);

//console.log(fruits)

// ---------------------- forEch ---------------------- 
fruits.forEach(fruit =>{
    console.log(fruit.name);
    console.log(fruit.color);
    console.log(fruit.calories);
    console.log("================");
});

// ---------------------- map ---------------------- 
const fruitNames = fruits.map(fruit => fruit.name);
const colors = fruits.map(fruit => fruit.color);
const calories = fruits.map(fruit => fruit.color);

console.log(fruitNames);
console.log(colors);
console.log(calories);

// ---------------------- filter ---------------------- 
const orangeFruits = fruits.filter(fruit => fruit.color === "orange");
console.log(orangeFruits)
const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
console.log(yellowFruits);

// ---------------------- reduce ---------------------- 
const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);
console.log(maxFruit);

const minFruit = fruits.reduce((min, fruit) => fruit.calories < min.calories ? fruit : min );
console.log(minFruit);