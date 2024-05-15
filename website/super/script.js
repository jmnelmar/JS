// super =  keyword is used in classes to call the constructor or
//          access the properties and methods of a parent (superclass)
//          this = this object
//          super = the parent

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Rabit extends Animal{
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }
}

class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
}

class Hawk extends Animal{
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }
}

const rabbit = new Rabit("rabbit",1,25);
const fish = new Fish("fish",2,12);
const hawk = new Hawk("hawk",3,50);

console.log(`${rabbit.name} has ${rabbit.age} and can run at ${rabbit.runSpeed}mph`);
console.log(`${fish.name} has ${fish.age} and can swim at ${fish.swimSpeed}mph`);
console.log(`${hawk.name} has ${hawk.age} and can fly at ${hawk.flySpeed}mph`);
