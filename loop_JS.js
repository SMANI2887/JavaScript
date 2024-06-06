// https://github.com/SMANI2887/JavaScript.git

// https://www.geeksforgeeks.org/control-statements-in-javascript/?ref=next_article#approach-5-using-for-loop

/* 2. JavaScript while Loop
The JS while loop is a control flow statement that allows code to be executed repeatedly based on a given Boolean condition. The while loop can be thought of as a repeating if statement. 

Syntax 

while (boolean condition) {
    loop statements...
}

1.While loop starts with checking the condition. If it is evaluated to be true, then the loop body statements are executed otherwise first statement following the loop is executed. For this reason, it is also called the Entry control loop
2.Once the condition is evaluated to be true, the statements in the loop body are executed. Normally the statements contain an updated value for the variable being processed for the next iteration.
3.When the condition becomes false, the loop terminates which marks the end of its life cycle.

*/
// JavaScript code to use while loop
let val = 1;

while (val < 6) {
    console.log(val); 
    val += 1;
}
