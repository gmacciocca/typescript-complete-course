console.log(`
=== TS CLASSES  ===
`);

class Person {
    name: string; // this is public property by default
    private type: string; // private property
    protected age: number = 99; // available to this class and derived classes
    private hobbies;

    //  `public userName: string`, below, is a shortcut for adding a public (also private or protected) property named userName in this class
    constructor(name: string, public userName: string, type: string = "nothing yet") {
        this.initialize();
        this.name = name;
        this.type = type;
    }

    private initialize() {
        this.clearHobbies();
    }

    private clearHobbies() {
        this.hobbies = [];        
    }

    printAge() {
        console.log(this.age);
    }

    setType(type: string) {
        this.type = type;
        console.log(this.type);
    }

    // GETTERS!! :)    
    get toString() : string {
        return `${this.name} is ${this.age} years old, and is a ${this.type}`;
    }    
}

const person = new Person("Peter", "peter.smith");
console.log(person);
console.log(person.name, person.userName);
person.printAge();
person.setType("Cool guy");
console.log(person.toString);

// Inheritance
class Gianluca extends Person {
    // name: string = "Gianluca";
    constructor(userName: string) {
        super("Gianluca", userName);
        this.age = 12;

        // this.type (below) is private so TS give me an error, but this still gets compiled and it works in ES5
        // console.log("inside constructor of Gianluca; this.type =", this.type);
    }
}

const gianluca = new Gianluca("gianluca.macciocca");
console.log(gianluca);
console.log(gianluca.toString);


// Getters and Setters
class Plant {
    private _species: string = "Default";

    get species() {
        return this._species;
    }
    
    set species(value: string) {
        if (value && value.length >= 3) {
            this._species = value;
        }
    }
}

const plant = new Plant;
console.log(plant.species);
plant.species = "ab";
console.log(plant.species);
plant.species = "cde";
console.log(plant.species);

// Static properties an methods.
class Helpers {
    static PI: number = 3.14;
    static calcCircumference(diameter: number) : number {
        return this.PI * diameter;
    }
}

console.log(Helpers.PI);
console.log(Helpers.calcCircumference(100));

// Abstract classes !!!!!!!!!!!!
abstract class Project {
    projectName: string = "default";
    budget: number = 1000;

    abstract changeName( name: string): void; // This will be inplemented in the derived class

    calcBudget(): number {
        return this.budget*2;
    }
}

class ITProject extends Project {
    changeName( name: string): void {
        this.projectName = name;
    }
}

const newProject = new ITProject;
console.log(newProject);
newProject.changeName("Super IT Project");
console.log(newProject);

// Private constructor and Singleton
class OnlyOne {
    private static instance: OnlyOne;

    private constructor(public readonly name: string) {}

    static getInstance(): OnlyOne {
        OnlyOne.instance = OnlyOne.instance || new OnlyOne("I'm a Singleton");
        return OnlyOne.instance;
    }
}

// ERROR ->  const wrong = new OnlyOne("Won't work!");
const right = OnlyOne.getInstance();
console.log(right.name);
// ERROR because name is declared as "readonly"  ->  right.name = "NEW NAME THAT WON'T WORK!";

