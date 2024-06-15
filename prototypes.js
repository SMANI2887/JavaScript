// function prototype
function person(name){
    this.name = name;
}

// create method
person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
}

// create object
let person2 = new person('mani');

person2.greet();