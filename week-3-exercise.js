// exercise 1 - Write a function, which receives an array as an argument which elements arrays of numbers.
// Find biggest negative number of each array. Return product of that numbers.If there is not any negative
// number in an array, ignore that one. Check that items of the given array are arrays.

function productOfBiggestNegativeNumbers(arr) {
    let isNegative = false;
    let isInvalid = false;
    arr.forEach(el => {
        if (!Array.isArray(el)) {
            isInvalid = true;
        }
    });
    arr.join().split(',').forEach(el => {
        if (el < 0) {
            isNegative = true;
        }
    });
    if (isInvalid) {
        return 'Invalid Argument'
    } else if (!isNegative) {
        return 'No negatives'
    }
    return arr.reduce((accumulator, currentValue) => {
        let max = currentValue.reduce((acc, current) => {
            if (current < 0 && acc < current) {
                return current;
            } else {
                return acc;
            }
        }, -Infinity);
        max = max !== -Infinity ? max : 1;
        return accumulator * max;
    }, 1)
}

console.log(productOfBiggestNegativeNumbers([[2, -9, -3, 0], [1, 2], [-4 , -11, 0]]));



// exercise 2 - Given an array of strings and numbers. Print the number of integers and the number
// of strings in the array.

function numberOfIntAndString(arr) {

    let obj = arr.reduce((obj, current) => {
        if (typeof current === 'string') {
            ++obj.strings
        } else {
            ++obj.numbers
        }
        return obj;
    }, {numbers: 0, strings: 0});

    return `Numbers: ${obj.numbers}, Strings: ${obj.strings}`;
}

console.log(numberOfIntAndString([1, '10', 'hi', 2, 3]));



// exercise 3 - Given an array consisting from the arrays of numbers (like a two-dimensional array).
// Find sum of each row and print them as an array.

function getSumOfEachRow(array) {

    return array.reduce((arr, current) => {
        let sum = current.reduce((sum, cur) => {
            return sum + cur;
        });
        arr.push(sum);
        return arr;
    }, []);
}

console.log(getSumOfEachRow([[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]]));



// exercise 4 - Given an array of integers. Write a function that return new array from first array,
// where  removed even numbers, and odd numbers was multiplied with new array length

function removeEvenAndMultipliedOddNumbers(array) {

    let arr = array.reduce((arr, current) => {
        if (current%2) {
            arr.push(current)
        }
        return arr;
    }, []);

    return arr.map(o => o*arr.length);
}

console.log(removeEvenAndMultipliedOddNumbers([5, 4, 78, 0, -3, 7]));



// exercise 5 - Given an array of numbers. Create an array containing only elements once.

function getUniqueNumbers(array) {
    return array.filter((item, i, arr) => arr.indexOf(item) === i)
}

console.log(getUniqueNumbers([1, 2, 3, 3, 2, 5]));



// exercise 6 - Given an array. Create the array which elements are products between two neighbours.

function productOfTwoNeighbours(array) {
    let arr = array.map((o, i) => o*array[i+1]);
    arr.pop();
    return arr;
}

console.log(productOfTwoNeighbours([1, 2, 3, 3, 2, 5]));



// exercise 7 - Given an object. Invert it (keys become values and values become keys).
// If there is more than key for that given value create an array.

function InvertObject(obj) {
    let invertedObject = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (!invertedObject[obj[key]]) {
                invertedObject[obj[key]] = key;
            } else {
                if (!Array.isArray(invertedObject[obj[key]])) {
                    invertedObject[obj[key]] = [invertedObject[obj[key]]];
                }
                invertedObject[obj[key]].push(key);
            }
        }
    }
    return invertedObject;
}

console.log(InvertObject({ a: '1', b: '2', c: '2', d: '2' }));



// exercise 8 - Given an object. Write a function that creates a deep copy of it.

function deepCopy(obj) {
    let copiedObject = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] !== 'object') {
                copiedObject[key] = obj[key]
            } else {
                copiedObject[key] = deepCopy(obj[key]);
            }
        }
    }
    return copiedObject;
}

let a = { a: '1', b: { a: 2} };
let b = deepCopy(a);

a.b.a = 123;
console.log(b.b.a !== 123);

