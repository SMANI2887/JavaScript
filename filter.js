const number = [1,2,3,4,5];

let evenno = number.filter(function(value){
    return value % 2 == 0;
});

console.log(`Even number : - ${evenno}`);