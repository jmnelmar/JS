/*
foreach() = method used to iterate over the elements
            of an array and apply a specified function
            (callback) to each element

            array.foreach(callback)
*/

let numbers = [1,2,3,4,5]



numbers.forEach(double);
numbers.forEach(display);

function display(element){
    console.log(element);
}

function double(element, index, array){
    array[index] = element * 2
}

let fruits = ["apple", "orange", "banana", "coconut"];

fruits.forEach(toUpperCase);
fruits.forEach(display);
fruits.forEach(toLowerCase);
fruits.forEach(display);
fruits.forEach(capitalize);
fruits.forEach(display);

function display(element){
    console.log(element);
}

function toUpperCase(element, index, array){
    array[index] = element.toUpperCase();
} 

function toLowerCase(element, index, array){
    array[index] = element.toLowerCase();
}

function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);

}
