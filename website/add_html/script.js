const newH1 = document.createElement("h1");
newH1.textContent = "I like pizza";

document.body.prepend(newH1);

const newH2 = document.createElement("h2");
newH2.id = "myh2"
newH2.style.color = "tomato"
newH2.style.textAlign = "center";
newH2.textContent = "I like hamburgers"



const box2 = document.getElementById("box2");
document.body.insertBefore(newH2,box2);