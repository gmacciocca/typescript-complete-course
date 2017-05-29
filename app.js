define(["require", "exports", "./math/circle", "./math/rectangle"], function (require, exports, CIRCLE, rectangle_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // string
    var myName = "Gianluca";
    // ERROR -> myName = 2;
    // number
    var myAge = 99;
    // ERROR -> myAge = "My Age";
    // boolean
    var hasHobbies = true;
    // ERROR -> hasHobbies = 1;  // gives an error even though tyou can cast 1 to boolean
    // assign  types;
    var notAnyType;
    notAnyType = 27;
    // ERROR -> notAnyType = "27";
    // array of any type
    var hobbies = ["cooking", "sports", "other"];
    hobbies = [100];
    // ERROR -> hobbies = 100;  -- not an array anymore
    // tuples
    var address = ["street", 99];
    // ERROR -> let address: [string, number] = [99, "street"];
    // enum
    var Color;
    (function (Color) {
        Color[Color["Grey"] = 0] = "Grey";
        Color[Color["Green"] = 100] = "Green";
        Color[Color["Blue"] = 101] = "Blue";
        Color[Color["Yellow"] = 102] = "Yellow"; // 102
    })(Color || (Color = {}));
    ;
    var myColor;
    myColor = Color.Blue;
    console.log(myColor);
    //any
    var car = "BMW";
    console.log(car);
    car = { brand: "BMW", series: 3 };
    console.log(car);
    // fuctions
    function returnMyName() {
        return myName;
        // ERROR -> return myAge;
    }
    console.log(returnMyName());
    // void
    function sayHello() {
        console.log("Hello!");
        // ERROR -> return myName;
    }
    // argument types
    function multiply(value1, value2) {
        return value1 * value2;
    }
    console.log(multiply(2, 3));
    // functions types
    var myMultiply;
    // ERROR -> myMultiply = sayHello;
    // ERROR -> myMultiply();
    myMultiply = multiply;
    console.log(myMultiply(4, 5));
    // Objects
    var userData = {
        name: "Gianluca",
        age: 99
    };
    var complex = {
        data: [1, 2, 3],
        output: function () { return this.data; }
    };
    console.log(complex.output(true));
    // Union types
    var myRealRealAge = 99;
    myRealRealAge = "ninetynine";
    // ERROR -> myRealRealAge = true;
    // Check types
    var finalValue = 33;
    if (typeof finalValue === "number") {
        console.log("Is a number");
    }
    // never type
    function neverReturns() {
        throw new Error("ERROR!");
    }
    ;
    // nullable type ("strictNullChecks": true  in tsconfig.json)
    var canBeNull = 12;
    canBeNull = null;
    var canAlsoBeNull;
    canAlsoBeNull = null;
    var canAlsoBeAny;
    canAlsoBeAny = 12;
    canAlsoBeAny = "111";
    console.log("PI2", CIRCLE.PI2);
    console.log("calculateCircumference(10) = ", CIRCLE.calculateCircumference(10));
    console.log("calculateRectangle(4, 5) = ", rectangle_1.default(4, 5));
});
