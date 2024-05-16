/**
 * DOM Navigation = The process of navigate through the structure
 *                  of an HTML document using JavaScript
 * 
 * 
 *  .firstElementChild
 *  .lastElementChild
 *  .nextElementSibling
 *  .prevElementSibling
 *  .parentElement
 *  .children
 */

//======================firstElementChild===========================
const element = document.getElementById("fruits");

const firstChild = element.firstElementChild;

firstChild.style.backgroundColor = "yellow";

const ulElements = document.querySelectorAll("ul");

ulElements.forEach(
    element =>{
        const first = element.firstElementChild;
        first.style.backgroundColor = "lightgreen";
    }
);

//======================lastElementChild===========================
const element2 = document.getElementById("fruits");
const lastChild = element2.lastElementChild;
lastChild.style.backgroundColor = "lightblue";

const uls = document.querySelectorAll("ul");

uls.forEach(
    ul =>{
        const lastChild = ul.lastElementChild;
        lastChild.style.backgroundColor = "pink";
    }
);
