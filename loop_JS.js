// https://github.com/SMANI2887/JavaScript.git

// https://www.geeksforgeeks.org/control-statements-in-javascript/?ref=next_article#approach-5-using-for-loop

/* 3. JavaScript do-while Loop
The JS do-while loop is similar to the while loop with the only difference is that it checks for the condition after executing the statements, and therefore is an example of an Exit Control Loop. It executes loop content at least once event the condition is false.

Syntax
do {
    Statements...
}
while (condition);

1.The do-while loop starts with the execution of the statement(s). There is no checking of any condition for the first time.
2.After the execution of the statements and update of the variable value, the condition is checked for a true or false value. If it is evaluated to be true, the next iteration of the loop starts.
3.When the condition becomes false, the loop terminates which marks the end of its life cycle.
4.It is important to note that the do-while loop will execute its statements at least once before any condition is checked and therefore is an example of the exit control loop.

Example
*/
let test = 1;

do {
    console.log(test);
    test++;
} while(test <= 5)

