//  rest parameters =   (...rest) allow  a function work with a variable
//                      number of arguments by bundling them into an arry
//                      
//                      spread = expand an array into a separate elements
//                      rest = bundle separate elements into an array


const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

function openFridge(...foods){
    console.log(...foods);
}

function getFood(...foods){
    return foods;
}

openFridge(food1, food2, food3, food4, food5);

const foods = getFood(food1, food2, food3, food4, food5)

console.log(foods)