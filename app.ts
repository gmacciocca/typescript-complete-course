// string
let myName = "Gianluca";
// ERROR -> myName = 2;

// number
let myAge = 99;
// ERROR -> myAge = "My Age";

// boolean
let hasHobbies = true;
// ERROR -> hasHobbies = 1;  // gives an error even though tyou can cast 1 to boolean

// assign  types;
let notAnyType : number;
notAnyType = 27;
// ERROR -> notAnyType = "27";

// array of any type
let hobbies: any[] = ["cooking", "sports", "other"];
hobbies = [100];
// ERROR -> hobbies = 100;  -- not an array anymore

// tuples
let address: [string, number] = ["street", 99];
// ERROR -> let address: [string, number] = [99, "street"];

// enum
enum Color {
    Grey,  // 0
    Green = 100, // 100 (duh!)
    Blue,  // 101
    Yellow // 102
};
let myColor: Color;
myColor = Color.Blue;
console.log(myColor);

//any
let car: any = "BMW";
console.log(car);
car = { brand: "BMW", series: 3};
console.log(car);


// fuctions
function returnMyName(): string {
    return myName;
    // ERROR -> return myAge;
}
console.log(returnMyName());

// void
function sayHello(): void {
    console.log("Hello!");
    // ERROR -> return myName;
}

// argument types
function multiply(value1: number, value2: number): number {
    return value1 * value2;
}
console.log(multiply(2, 3));

// functions types
var myMultiply: (val1: number, val2: number) => number;
// ERROR -> myMultiply = sayHello;
// ERROR -> myMultiply();
myMultiply = multiply;
console.log(myMultiply(4, 5));

// Objects
let userData: { name: string, age: number } = {
    name: "Gianluca",
    age: 99
};
// ERROR -> userData = {};
// ERROR -> 
//  userData = {
//     a: "Hello",
//     b: 1
// };


// Type alias
type Complex = { data: number[], output: (all: boolean) => number[]};
let complex: Complex = { 
    data: [1, 2, 3], 
    output: function (): number[] { return this.data; }
};

console.log(complex.output(true));

// Union types
let myRealRealAge: number | string = 99;
myRealRealAge = "ninetynine";
// ERROR -> myRealRealAge = true;

// Check types
let finalValue = 33;
if (typeof finalValue === "number") {
    console.log("Is a number");
}

// never type
function neverReturns(): never {
    throw new Error("ERROR!");
};

// nullable type ("strictNullChecks": true  in tsconfig.json)
let canBeNull : number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canAlsoBeAny;
canAlsoBeAny = 12;
canAlsoBeAny = "111";



