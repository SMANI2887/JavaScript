// class is a template or prototype or buleprint
// defining a class
class student {
    // constructor is a special method
    // that gets called whenever we create an object to this class
    constructor(name, age){
        // console.log('constructor is called');
        this.name = name;
        this.age = age;
        this.status = 'Teacher';
    }

}

// create an object
let student2 = new student('mani', 35);
let student3 = new student('mathan', 32);

class teacher {
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.status = 'Teacher';
    }
}

let teacher2 = new teacher('ratha', 35);
let teacher3 = new teacher('kala',42);


console.log(teacher2);
console.log(teacher3);

console.log(student2);
console.log(student3);