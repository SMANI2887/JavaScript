// IIFE function using filter method
let arr = [1, 2, 3, 4, 5];

((arr) => {
    console.log(arr.filter(arr => arr%2 != 0).join(' '));
})(arr);