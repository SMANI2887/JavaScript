// https://github.com/SMANI2887/JavaScript.git

/* 6. Nested if…else
Nested if…else statements in JavaScript allow us to create complex conditional logic by checking multiple conditions in a hierarchical manner. Each if statement can have an associated else block, and within each if or else block, you can nest another if…else statement. This nesting can continue to multiple levels, but it’s important to maintain readability and avoid excessive complexity.

Syntax: */
if (condition1) {
    // Code block 1
    if (condition2) {
        // Code block 2
    } else {
        // Code block 3
    }
} else {
    // Code block 4
}

/* Example: This example demonstrates how nested if…else statements can be used to handle different scenarios based on multiple conditions. */

let weather = "sunny";
let temperature = 25;

if (weather === "sunny") {
    if (temperature > 30) {
        console.log("It's a hot day!");
    } else if (temperature > 20) {
        console.log("It's a warm day.");
    } else {
        console.log("It's a bit cool today.");
    }
} else if (weather === "rainy") {
    console.log("Don't forget your umbrella!");
} else {
    console.log("Check the weather forecast!");
};
