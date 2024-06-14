// class is a template or prototype or buleprint
// defining a class
class student {
    // constructor is a special method
    // that gets called whenever we create an object to this class
    constructor(){
        // console.log('constructor is called');
        this.name = 'Guest';
    }

}

// create an object
let student2 = new student();
let student3 = new student();

// edit / update the student name
student2.name = 'mani';

console.log(student2);
console.log(student3);