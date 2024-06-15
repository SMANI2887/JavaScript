// Anonymous function using filter method
let arr = [1, 2, 3, 4, 5];

let PrintOddNumber = (arr) => {
    console.log(arr.filter(arr => arr%2 != 0).join(' '));
}
PrintOddNumber(arr);