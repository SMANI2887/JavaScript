// https://github.com/SMANI2887/JavaScript.git

// https://www.geeksforgeeks.org/control-statements-in-javascript/?ref=next_article#approach-5-using-for-loop

/* 1. JavaScript for Loop
The JS for loop provides a concise way of writing the loop structure. The for loop contains initialization, condition, and increment/decrement in one line thereby providing a shorter, easy-to-debug structure of looping. 

Syntax */
for ('initialization; testing condition; increment/decrement') {
    // statement(s)
}

/*
Initialization condition: It initializes the variable and mark the start of a for loop. An already declared variable can be used or a variable can be declared, local to loop only.
Test Condition: It is used for testing the exit condition of a for loop. It must return a boolean value. It is also an Entry Control Loop as the condition is checked prior to the execution of the loop statements.
Statement execution: Once the condition is evaluated to be true, the statements in the loop body are executed.
Increment/ Decrement: It is used for updating the variable for the next iteration.
Loop termination: When the condition becomes false, the loop terminates marking the end of its life cycle.

Example */

// JavaScript program to illustrate for loop
let x;

// for loop begins when x = 2
// and runs till x <= 4
for (x = 2; x <= 4; x++) {
    console.log("Value of x: " + x);
}



