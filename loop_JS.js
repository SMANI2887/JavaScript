// https://github.com/SMANI2887/JavaScript.git

// https://www.geeksforgeeks.org/control-statements-in-javascript/?ref=next_article#approach-5-using-for-loop

/* 4. JavaScript for-in Loop
JS for-in loop is used to iterate over the properties of an object. The for-in loop iterates only over those keys of an object which have their enumerable property set to “true”.

Syntax
for(let variable_name in object_name) {
    // Statement
}
Example: This example shows the use of for-in loop.
*/
let myObj = { x: 1, y: 2, z: 3 };
for (let key in myObj) {
    console.log(key, myObj[key]);
}


