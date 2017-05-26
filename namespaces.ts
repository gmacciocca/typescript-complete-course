// Namespaces

/// <reference path="circleMath.ts" /> 
/// <reference path="rectangleMath.ts" /> 

// !!!! COMPILE THIS WITH THIS COMMAND LINE:
// tsc namespaces.ts --outFile namespaces.js

import CircleMath = MyMath.Circle;
const PI = 1.1;

console.log(CircleMath.calculateCircumference(10));
console.log(MyMath.calculateRectangle(20, 30));
console.log(PI);
