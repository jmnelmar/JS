/**
 *  object =    A collection of related properties and/or 
 * methods can represent real world objects (people, products, places)
 */ 

const persona1 = {
    firstName: "Nelson",
    lastName : "Jimenez",
    age : 30,
    isEmployed : true,
    sayHello: ()=>{console.log("Hi I'm Nelson!")},
    sayBye: ()=>{console.log("Bye!")}
}

const person2 = {
    firstName: "Veronica",
    lastName: "Mejia",
    age: 40,
    isEmployed: true,
    sayHello: () => console.log("Hello I'm vero"),
    sayBye: ()=> console.log("Bye!")
}


console.log(persona1.sayHello());
console.log(person2.sayHello());

console.log(persona1.sayBye());
console.log(person2.sayBye())