// exercise 1
// a. - Print all number between 1 and 10.

for(let a = 1; a < 11; a++) {
    console.log(a)
}


// b. - Print all number between 1 and 10 except 6.

for(let b = 1; b < 11; b++) {
    if (b === 6) continue;
    console.log(b)
}


// c. - Print all even number between 1 and 10.

for(let c = 1; c < 11; c++) {
    if (c%2 === 0) {
        console.log(c)
    }
}


// d. - Calculate sum of all numbers between 1 and 10 (using loop).

function sum(num) {
    let sum = 0;
    for(let d = 1; d <= num; d++) {
        sum += d;
    }
}

console.log(sum(10));


// e. - Calculate sum of all numbers between 1 and 10 except 8.

function sumExcept8(num) {
    let sum = 0;
    for(let e = 1; e <= num; e++) {
        if (e === 8) continue;
        sum += e;
    }
    return sum;
}

console.log(sumExcept8(10));


// f. - Calculate sum of all odd numbers between 1 and 10.

function sumOddNumbers(num) {
    let sum = 0;
    for(let f = 1; f <= num; f++) {
        if (f%2 === 0) continue;
        sum += f;
    }
    return sum;
}

console.log(sumOddNumbers(10));


// g. - Calculate sum of squares of all numbers between 1 and 10.

function sumSquares(num) {
    let sum = 0;
    for(let g = 1; g <= num; g++) {
        sum += g**2;
    }
    return sum;
}

console.log(sumSquares(10));



// exercise 2
// Insert a digit and a number. Check whether the digits contains in the number or not.(don`t use string)

function isDigitInNumber(digit, number) {
    while(number) {
        if (number%10 === digit) {
            return true;
        }
        number = (number - number%10)/10
    }
    return false;
}

console.log(isDigitInNumber(5, 2463));



// exercise 3
// Enter a number. Reverse its first and last digits. Print the new number.

function reverseFirstAndLastDigits(num) {
    let cloneNum = num;
    let numberLength = 0;
    while(cloneNum >= 1) {
        numberLength += 1;
        cloneNum /= 10;
    }
    return (num%10)*(10**(numberLength-1)) + num%(10**(numberLength-1)) - num%10 + Math.floor((num/10**(numberLength-1)));
}

console.log(reverseFirstAndLastDigits(2463));



// exercise 4
// Enter a number. Find the difference between its biggest and smallest digits.

function diffOfBiggestAndSmallestDigits(num) {
    let min = Infinity;
    let max = 0;
    while(num >= 1) {
        if (num%10 > max) {
            max = num%10
        }
        if (num%10 < min) {
            min = num%10
        }
        num = (num - num%10)/10;
    }
    return max - min;
}

console.log(diffOfBiggestAndSmallestDigits(5));



// exercise 5
// Insert a number. Print ‘yes’ if the number is prime, ‘no’ otherwise.

function isPrime(num) {
    let isPrime = true;
    for(let i = 2; i < num; i++) {
        if (num%i === 0) {
            isPrime = false;
            console.log('no');
            return;
        }
    }
    if (isPrime) {
        console.log('yes')
    }
}

isPrime(401);



// exercise 6
// Given a number n ( n > 0 ). Print Fibonacci series up to n.

function fibSeries(n) {
    function fib(k) {
        if (k < 2) return k;
        return fib(k - 1) + fib(k - 2);
    }

    for(let i = 0; ; i++) {
        if (fib(i) > n) break;
        console.log(fib(i));
    }
}

fibSeries(7);



// exercise 7
// Write a recursive function to determine whether all digits of the number are odd or not.

function isAllDigitsOdd(num) {
    if (num < 10 && num%2 !== 0) {
        return true
    } else if (num%2 === 0) {
        return false
    }
    num = (num - num%10)/10;
    return isAllDigitsOdd(num)
}

console.log(isAllDigitsOdd(4211133));



// exercise 8
// Write a function that accepts a string(a sentence) as a parameter and finds the longest word
// within the string․ If there are several words which are the longest ones, print the last word
// (words can be separated by space, comma or hyphen).

function getLongestWord(sen) {
    var str = sen;
    let resLength = 0;
    for(let i =0; i < str.length; i++) {
        if (str[i] === ' ' || str[i] === ',' || str[i] === '-') {
            var sliceStr = str.slice(0, i);
            if (sliceStr.length > resLength) {
                resLength = sliceStr.length;
                var res = sliceStr
            }
            var str = str.slice(i+1);
            i = 0;
        }
    }
    console.log(res)
}

getLongestWord('A revolution without dancing is a revolution not worth having.');



// exercise 9
// Write a function to find longest substring in a given a string without repeating characters except space character.
// If there are several, return the last one. Consider that all letters are lowercase.

function getLongestSubString(sen) {
    var str = sen;
    let resLength = 0;
    for(let i =1; i < str.length; i++) {
        for(let j =i-1; j >= 0; j--) {
            if (str[i] === str[j] && str[i] !== ' ') {
                var sliceStr = str.slice(0, i);
                if (sliceStr.length >= resLength) {
                    resLength = sliceStr.length;
                    var res = sliceStr
                }
                var str = str.slice(j+1);
                i = 1;
                break;
            }
        }
    }
    console.log(res)
}

getLongestSubString('there are no two words in the english language more harmful than "good job"');




// exercise 10
// Write a function, which receives two numbers as arguments and finds all numbers between them such
// that each digit of the number is even. The numbers obtained should be printed in a comma-separated
// sequence on a single line.

function getNumbers(num1, num2) {
    var res = '';
    for(let i = num1; i <= num2; i++) {
        let isEven = true;
        let j = i;
        while(j >= 0) {
            if (j%2 !== 0) {
                isEven = false;
                break;
            }
            if (j < 10) {
               isEven = j%2 === 0;
               break;
            }
            j = (j - j%10)/10
        }
        if (isEven) {
            var res = res.concat(`, ${i}`)
        }
    }
    var res = res.slice(1);
    if (res) {
        return res;
    } else {
        return 'Such numbers does not exist.'
    }
}

console.log(getNumbers(19, 42));
