// By value (primitives)
let a = 5;
let b;
b = a;
a = 3;
console.log(a);
console.log(b);

// ------------------------------------------------------------------


// By reference (all objects (including functions))
let c = { greeting: 'Welcome' };
let d;
d = c;

// Mutating the value of c
c.greeting = 'Welcome to geeksforgeeks';
console.log(c);
console.log(d);
