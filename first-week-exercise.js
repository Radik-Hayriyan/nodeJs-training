// exercise 1 - c. '715', '67'


// exercise 2
// a.

let a = 5, b = 1, c;
c = a;
a = b;
b = c;

console.log(a, b);

// b.

let x = 5, y = 1;

x = x + y;
y = x - y;
x = x-y;

console.log(x, y);


// exercise 3

let num = 4;

console.log(num < 0 && 'yes' || 'no');


// exercise 4

let num1 = 5, num2 = 6;

console.log(!(num1%num2 && num2%num1) && 1 || 0);


// exercise 5

let num_1 = 4, num_2 = 5, num_3 = 6;

console.log(num_1 > num_2 && num_1 > num_3 && num_1 || num_2 > num_1 && num_2 > num_3 && num_2 || num_3);


// exercise 6

let str = 'test';

let result = str.slice(0, 2) + str.split('').reverse().join('') + str.substring(1, 3).repeat(4) + str.slice(0, 2) + str.substring(1);

console.log(result);
