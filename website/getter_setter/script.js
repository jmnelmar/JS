// getter = special method that makes a property readable
// setter = special method that makes a property writeable

// validate and modify a value when readinf/writing a property

class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newwidth){
        if(newwidth > 0){
            this._width = newwidth;
        }else{
            console.error("width must be a positive number");
        }
    }

    set height(newheight){
        if(newheight > 0){
            this._height = newheight;
        }else{
            console.error("height must be a positive number");
        }
    }

    get width(){
        return this._width.toFixed(1);
    }

    get height(){
        return this._height.toFixed(1);
    }

    get area(){
        return (this._width * this._height).toFixed(1);
    }
}

const rectangle = new Rectangle(3,4);

console.log(rectangle.width);
console.log(rectangle.height);

console.log(rectangle.area);


class Persona{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        }else{
            console.error("First Name must be a non-empty string");
        }
    }

    set lastName(newLastName){
        if(typeof newLastName === "string" && newLastName.length > 0){
            this._lastName = newLastName;
        }else{
            console.error("Last Name must be a non-empty string");
        }
    }

    set age(newAge){
        if(typeof newAge === "number" && newAge >= 0){
           this._age = newAge; 
        }else{
            console.log("Age must be a non-negative number");
        }
    }

    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    get fullName(){
        return this._firstName + " " + this._lastName;
    }

    get age(){
        return this._age;
    }
}

const person = new Persona("Nelson","Jimenez",39);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);
