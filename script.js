// class is a template or prototype or buleprint
// defining a class
class Rectangle {
    // constructor is a special method
    // that gets called whenever we create an object to this class
    constructor(width, height){
        // console.log('constructor is called');
        this.width = width;
        this.height = height;
        
    }
    
    area() {

    console.log(`Rectangle height is ${this.height} and width is ${this.width} area is ${this.width * this.height}`);
}

}


// create an object
let R1 = new Rectangle(100, 50);
let R2 = new Rectangle(200, 100);
let R3 = new Rectangle(300, 150);


console.log(R1);
console.log(R2);
console.log(R3);

R1.area()