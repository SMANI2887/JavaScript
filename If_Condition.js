// https://github.com/SMANI2887/JavaScript.git

/* 5. Using Ternary Operator ( ?: )
The conditional operator, also referred to as the ternary operator (?:), is a shortcut for expressing conditional statements in JavaScript.

Syntax: 

condition ? value if true : value if false */

// Example: In this example, we use the ternary operator to check if the user’s age is 18 or older. It prints eligibility for voting based on the condition.

let age = 21;

const result =
    (age >= 18) ? "You are eligible to vote."
        : "You are not eligible to vote.";

console.log(result);
