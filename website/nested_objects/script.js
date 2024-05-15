const persona = {
    fullname: "Nelson Jimenez",
    age: 30,
    isStudent: true,
    hobbies: ["karate", "jellyfishing","cooking"],
    address: {
        street: "124 conch st.",
        city: "Bikini Bottom",
        country: "Int. water"
    }
}

console.log(persona.fullname);
console.log(persona.age);
console.log(persona.isStudent);
console.log(persona.hobbies);
console.log(persona.address.street);

class Person{
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const persona1 = new Person("Nelson",30,"124 conch st.","bikini botton","int watters");
const persona2 = new Person("Veronica",28,"124 conch st.","short botton","int watters");

console.log(persona1.address.city)
console.log(persona2.address.city)