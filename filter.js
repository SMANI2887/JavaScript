const number = [1,2,3,4,5];

// filter -> value: Number,index: Number, Array: Number []
let evenno = number.filter(function(value, index, array){
    return value % 2 == 0;
});

console.log(`Even number : - ${evenno}`);