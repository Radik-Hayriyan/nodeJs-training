// exercise 1 - What are the outputs of these expressions: '7' + 1 + 5 and 1 + 5 + '7'
// c. '715', '67'


// exercise 2 - Swap 2 variables
// a. - With third variable

let a = 5, b = 1, c;
c = a;
a = b;
b = c;

console.log(a, b);

// b. - With arithmetic operators

let x = 5, y = 1;

x = x + y;
y = x - y;
x = x-y;

console.log(x, y);


// exercise 3 - Check whether a given number is negative. Print “yes”, if it is negative, print “no” otherwise

let num = 4;

console.log(num < 0 && 'yes' || 'no');


// exercise 4 - Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.

let num1 = 5, num2 = 6;

console.log(!(num1%num2 && num2%num1) && 1 || 0);


// exercise 5 - Given three numbers. Find the maximum one

let num_1 = 4, num_2 = 5, num_3 = 6;

console.log(num_1 > num_2 && num_1 > num_3 && `${num_1}` || num_2 > num_3 && `${num_2}` || num_3);


// exercise 6 - Given string ‘test’. Use variables and string methods and print ‘tetsetesesesesteest’

let str = 'test';

String.prototype.reverse = function() {
    return this.split('').reverse().join('');
};

let result = ''.concat(str.slice(0, 2), str.reverse(), str.substring(1, 3).repeat(4), str.slice(0, 2), str.substring(1));

console.log(result);
