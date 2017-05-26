namespace Generics {
// Simple Generic

function echo( data: any ) {
    return data;
}

console.log(echo("Gianluca"));
console.log(echo(99));
console.log(echo({ name: "Gianluca", age: 99 }));


// Better generic
function betterEcho<T>( data: T ) {
    return data;
}

console.log(betterEcho("Gianluca").length);
console.log(betterEcho<number>(99).toString());
console.log(betterEcho({ name: "Gianluca", age: 99 }));

// Built-in generics (Array is a generic type by default)
const testResults: Array<number> = [1.2, 3.4];
testResults.push(5.6);
console.log(testResults);
// ERROR -> testResults.push("Hello");

// Arrays
function printAll<T>(args: T[]) {
    args.forEach(element => console.log(element));
}

printAll<string>(["apples", "banans"]);

// Generic types
const echo2: <T>(data: T) => T = betterEcho;

console.log(echo2("Japan"));

// Generic classes

class SimpleMath<T extends number | string> {
    baseValue: T;
    multiply: T;
    calculate() : number {
        return +this.baseValue * +this.multiply;
    }
}

const simpleMath = new SimpleMath();
simpleMath.baseValue = 10;
simpleMath.multiply = "5";
console.log(simpleMath.calculate());

}