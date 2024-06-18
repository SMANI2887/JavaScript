let marks = [80, 75, 95, 99, 100];

let sum = marks.reduce((prevVal, CurrVal) => {
    console.log(prevVal, CurrVal);
    return prevVal + CurrVal
}) 

console.log(sum);