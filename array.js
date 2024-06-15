// create symplification display 

function log(...numbers){
    console.log(...numbers);
}

// create an Array
// type-1
let number = [1,2,3,4,5];
log(number)

//  type-2
let number2 = new Array(1, 2, 3, 4, 5);
log(number2)
// push method :inserts an element at the end of the array

let number3 = [];

number3.push(3);
number3.push(4,5,6);
log('Push method' + ' ' + number3)

// pop: removes the element from the end of the array
number3.pop();

log(`pop method ${number3}`);

// unshift: inserts an element at the beginning of the array
number3.unshift(2)

log(`unshift method - ${number3}`);

let number4 = [];

// array 10 value allacate 
number4.push(...Array(10))
number4.push(...Array(10).fill(0));

log(number4)


// shift: removes the element from the beginning of the array
number3.shift();

log(`shift method - ${number3}`)

// splice: inserts/removes the element from any particular index 
// insert
number3.splice(1,0,3.5)

log(number3)

number3.splice(1,0,3.5)

log(number3)
// remove
number3.splice(1,1,1)

log(number3)
