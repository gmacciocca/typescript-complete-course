namespace interfaces {

interface NamedPerson    {
    firstName : string;
    age?: number;  //  THE Q-MARK MAKES THIS FIELD OPTIONAL in the interface implementation
    [propName: string]: any; 
    greet(lastName: string) : void;
};
 
function greet(person: NamedPerson ) {
    console.log("Hello, " + person.firstName);
}

function changeName(person: NamedPerson) {
    person.firstName = "Anna";
}

const person: NamedPerson = {
    firstName: "Gianluca",
    hobbies: ["Cooking", "Sports"],
    greet(lastName: string) {
        console.log("I am " + this.firstName + " " + lastName )
    }
};

// greet({ firstName: "Peter", age: 99 });
changeName(person);
greet(person);
person.greet("Smith");

class Person implements NamedPerson {
    firstName: string;
    lastName: string;
    greet(lastName: string) {
        console.log("I am class named " + this.firstName + " " + lastName )
    }
}

const myPerson = new Person();
myPerson.firstName = "Peter";
myPerson.lastName = "White";
greet(myPerson);
myPerson.firstName = "Chris";
myPerson.greet(myPerson.lastName);



// Function Types using interfaces

interface DoubleValueFunc {
    (number1: number, number2: number) :number;
}

const myDoubleValueFunc : DoubleValueFunc = function( value1: number, value2: number) {
    return (value1 + value2) * 2;
};

console.log(myDoubleValueFunc(5, 10));


// Interface inheritance

interface AgedPerson extends NamedPerson {
    age: number; // force age to be required
}

const oldPerson: AgedPerson = {
    age: 1000,
    firstName: "Mary",
    greet(lastName: string) {
        console.log("I'm an old person of " + this.age + " years, named", this.firstName + " " + lastName);
    }
}

oldPerson.greet("Tyler Moore");
console.log(oldPerson)






}