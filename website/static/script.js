// static = keyword that defines properties or methods that belong
//          to a class itself rather than the objects created
//          from that class (class owns anything static, not the objects)


class MathUtil{
    static PI = 3.141516;

    static getDiameter(radius){
        return radius * 2;
    }

    static getCircunference(radius){
        return 2 * this.PI * radius;
    }

    static getArea(radius){
        return this.PI * Math.pow(radius,2);
    }
}

class User{
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getArea(10));

const user1 = new User("Nelson");
const user2 = new User("Vero");
console.log(user1.username);
console.log(user2.username);
console.log(`Count of users: ${ User.userCount}`);