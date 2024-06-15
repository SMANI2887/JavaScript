let string = '1 2 3 4 5';

console.log(string.split(' '),typeof(string));

let array = string.split(' ');

// convert the elements of the array to number

// method-1

for (let index=0; index<array.length; index++){
    array[index] = parseInt(array[index])
}
console.log('method-1 -> (integer)' + array);

// method-2

let array2 = array.map((elements) => parseInt(elements))

console.log('method-2 -> (integer)' + array2);