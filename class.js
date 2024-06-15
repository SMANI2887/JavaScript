// ES6
// create class
class person {
    // create constructor
    constructor(name){
        this.name = name;
    }

    // create method
    greet(){
        console.log(`Hello, my name is ${this.name}`);
    }

}

// create object
let person2 = new person('mani');

person2.greet();