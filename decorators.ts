namespace Decorators {
// DECORATORS

// Decorators attached to a class will get one argument.
function logger(decoratedClassConstructor: Function) {
    console.log("From logger decorator: ", decoratedClassConstructor);
}

@logger
class Person {
    constructor() {
        console.log("From Person constructor: ", "Hi!");
    }
}

// Constructor Factory
function loggerFactory(shouldLog: boolean) : ClassDecorator { // must specify retun type of "ClassDecorator"
    return <ClassDecorator>(shouldLog ? logger : null); // must cast return value to "ClassDecorator"
}

// as soon as we pass a parameter to "loggerFactory", it becomes a decorator function factory
@loggerFactory(true)
class Car {
}

// Advanced (a useful decorator and multiple decorators)
function printable(constructorFn: Function) {
    constructorFn.prototype.print = function() {
        console.log("From `print` method added in `printable` decorator: ", this);
    }
}


@loggerFactory(true)
@printable
class Plant {
    name : string = "Green Plant";
}

const plant = new Plant();
(<any>plant).print();



// Method decorators and Property decorators

function makeMethodPropertyOverwritable(value: boolean) {
    //  "target" differ if the method is static or from an instanciated class 
    //      - if static this would be the Class contructor fuction
    //      - if instanciated then it's the prototype of the Class
    return function(target: any, propName: string, descriptor: PropertyDescriptor ) {
        descriptor.writable = value;
    }
}

function makePropertyOverwritable(value: boolean) : Function {
    //  "target" differ if the method is static or from an instanciated class 
    //      - if static this would be the Class contructor fuction
    //      - if instanciated then it's the prototype of the Class
    return function(target: any, propName: string ) {
        // This class does NOT take the PropertyDescriptor as 3rd parameter like in the "makeMethodPropertyOverwritable" above
        // but it can RETURN a new PropertyDescriptor for this property
        const newDescriptor : PropertyDescriptor = {
            writable: value // setting this to false will prevent even the class Project to set this property.....not nice
        }
        return newDescriptor;
    }
}

class Project {
    @makePropertyOverwritable(true)
    projectName: string;
    constructor(name: string) {
        this.projectName = name;
    }

    @makeMethodPropertyOverwritable(false)
    calcBudget() {
        console.log(1000);
    }
}

const project = new Project("Super Project");
project.calcBudget();
// ERROR: The next line will throw an error because "calcBudget" has its PropertyDescriptor.writable === false
// project.calcBudget = function () { console.log(2000); }
project.calcBudget();
console.log(project);

 

// Parameter decorator
function printInfo( target: any, methodName: string, paramIndex: number) {
    console.log("target:", target);
    console.log("methodName:", methodName);
    console.log("paramIndex:", paramIndex);
}

class Course {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    printStudentNumbers( mode: string, @printInfo printAll: boolean ) {
        if (printAll) {
            console.log("10000");
        } else {
            console.log("2000");
        }
    }
}

const course = new Course("New Course");
course.printStudentNumbers("blah", true);
course.printStudentNumbers("blah", false);




}


