// Exercise 1 - How was your TypeScript Class?
class Car {
    public name: string;
    public acceleration: number = 0;
    constructor(name: string){
        this.name = name;
    }
    honk() {
        console.log("Toooooooooot!");
    }
    accelerate(speed: number) {
        this.acceleration += speed;
    }
}

var car2 = new Car("BMW");
car2.honk();
console.log(car2.acceleration);
car2.accelerate(10);
console.log(car2.acceleration);
 
// Exercise 2 - Two objects, based on each other ...
abstract class BaseObject {
    public width: number = 0;
    public length: number = 0;
};

class Rectangle extends BaseObject {
    constructor(width: number, length: number) {
        super();
        this.width = width;
        this.length = length;
    }
    calcSize() {
        return this.width * this.length;
    }
}

var rectangle = new Rectangle(5, 2);
console.log(rectangle.calcSize());
 
// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
class Person2 {
    private _firstName: string = "";

    get firstName() {
        return this._firstName;        
    }
    set firstName(value) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }        
    }
}

const person2 = new Person2();
console.log(person2.firstName);
person2.firstName = "Ma";
console.log(person2.firstName);
person2.firstName = "Maximilian";
console.log(person2.firstName);