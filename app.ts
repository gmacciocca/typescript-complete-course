// string
let myName = "Gianluca";
// ERROR -> myName = 2;

// number
let thisYear = 2017;
// ERROR -> thisYear = "This year";

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







