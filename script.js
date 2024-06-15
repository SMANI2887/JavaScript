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
    // function calling 
    print() {
        // template literals
        let result = `Rectangle is width :  
                      ${this.width}, 
                      height =  ${this.height}`;
        return result;
}

}


// create an object
let R1 = new Rectangle(100, 50);
let R2 = new Rectangle(200, 100);
let R3 = new Rectangle(300, 150);


console.log(R1.print());
console.log(R2);
console.log(R3);

