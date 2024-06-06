// https://github.com/SMANI2887/JavaScript.git

/* 4. Using Switch Statement (JavaScript Switch Case)
As the number of conditions increases, you can use multiple else-if statements in JavaScript. but when we dealing with many conditions, the switch statement may be a more preferred option.

Syntax: */

switch (expression) {
    case value1:
        statement1;
        break;
    case value2:
        statement2;
        break;
    // . . .
    case valueN:
        statementN;
        break;
    default:
        statementDefault;
};
/* Example: In this example, we find a branch name Based on the student’s marks, this switch statement assigns a specific engineering branch to the variable Branch. The output displays the student’s branch name, */

const marks = 85;

let Branch;

switch (true) {
    case marks >= 90:
        Branch = "Computer science engineering";
        break;
    case marks >= 80:
        Branch = "Mechanical engineering";
        break;
    case marks >= 70:
        Branch = "Chemical engineering";
        break;
    case marks >= 60:
        Branch = "Electronics and communication";
        break;
    case marks >= 50:
        Branch = "Civil engineering";
        break;
    default:
        Branch = "Bio technology";
        break;
}

console.log(`Student Branch name is : ${Branch}`);
