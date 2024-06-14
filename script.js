// class is a template or prototype or buleprint
// defining a class
class student {
    // constructor is a special method
    // that gets called whenever we create an object to this class
    constructor(){
        console.log('constructor is called');
    }

}

// create an object
let student2 = new student();

console.log(student2);