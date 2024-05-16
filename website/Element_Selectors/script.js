/**
 * element selectors = Methods used to target manipulate HTML elements 
 *                     they allow you to select one or multiple HTML elements
 *                      from the DOM(document object model)
 * 
 *  1. document.getElementById()        ELEMENT OR NULL
 *  2. document.getElementsClassName()  HTML COLLECTION
 *  3. document.getElementsByTagName()  HTML COLLECTION
 *  4,  document.querySelector()        FIRST ELEMENT OR NULL
 *  5.  document.querySelectorAll()     NODELIST
 */             

const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";
console.log(myHeading);

const fruits = document.getElementsByClassName("fruits");
console.log(fruits);

//fruits[0].style.backgroundColor = "yellow";
//fruits[1].style.backgroundColor = "orange";

for(let fruit of fruits){
    fruit.style.backgroundColor = "yellow";
}

setTimeout(()=>{
    Array.from(fruits).forEach(
        fruit => {
            fruit.style.backgroundColor = "purple";
        }
    );
},3000)

const h4Elements = document.getElementsByTagName("h4");
console.log(h4Elements);

h4Elements[0].style.backgroundColor = "green";
h4Elements[1].style.backgroundColor = "cyan";

setTimeout(
    () =>{
        for(let h4 of h4Elements){
            h4.style.backgroundColor = "green";
        }
    },3000
);

liElements = document.getElementsByTagName("li");

for(let li of liElements){
    li.style.backgroundColor = "lightgreen";
}

const element = document.querySelector(".fruits");

element.style.backgroundColor = "cyan";

const fruits2 = document.querySelectorAll(".fruits");
fruits2[0].style.backgroundColor = "green";

const foods = document.querySelectorAll("li");
foods[4].style.backgroundColor = "red";

foods.forEach(
    food => {
        food.style.backgroundColor = "pink";
    }
);