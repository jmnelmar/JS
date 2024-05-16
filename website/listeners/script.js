/**
 *  eventlistesner = Listen for a specific events to create interactive web pages
 *                  events: click, mouseover, mouseout
 *                  .addEventListener(event, callback)
 */
const mybox = document.getElementById("MyBox");

//function changeColor(event){
//    console.log(event);
//    event.target.style.backgroundColor ="tomato";
//    event.target.textContent = "OUCH! 🤕"
//
//}

//mybox.addEventListener("click", changeColor);

mybox.addEventListener("click", event =>{
    event.target.style.backgroundColor ="tomato";
    event.target.textContent = "OUCH! 🤕"

});

mybox.addEventListener("mouseover", event =>{
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't do it 😨"
})

mybox.addEventListener("mouseout", event =>{
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click Me 😃"
})