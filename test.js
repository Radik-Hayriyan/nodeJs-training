// exercise 1 - Swap 2 variables
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



// exercise 2 - Given three numbers. Find the maximum one (Only use &&, || and comparison operators)

let num_1 = 4, num_2 = 5, num_3 = 6;

console.log(num_1 > num_2 && num_1 > num_3 && `${num_1}` || num_2 > num_3 && `${num_2}` || num_3);



// exercise 3 - Given an array of integers. Write a function that returns a new array containing only odd numbers
// multiplied with new array length

function removeEvenAndMultipliedOddNumbers(array) {
    return array.filter(o => o%2).map((o, i, arr) => o*arr.length)
}

console.log(removeEvenAndMultipliedOddNumbers([5, 4, 78, 0, -3, 7]));



// exercise 4 - Given an array of integers. Write a function which will get that array and create new array,
// with size equal to first positive element of given array (If no positive element return []) and content
// of returned array will be next elements of given array (repeated, if needed)

function func(array) {
    let length = array.length;
    let counter = 0;
    let repeatedArray = [], result = [];
    for (let i = 0; i < length; i++) {
        if (array[i] > 0) {
            repeatedArray = array.slice(i+1);
            counter = array[i];
            break;
        }
    }
    if (counter === 0) {
        return [];
    } else if (repeatedArray.length === 0) {
        return `[empty x ${counter}]`
    }

    for (let i = 0; i < counter; i++) {
        if (repeatedArray[i]) {
            result.push(repeatedArray[i])
        } else {
            result.push(repeatedArray[i%repeatedArray.length])
        }
    }
    return result
}
console.log(func([]));



// exercise 5 - Given an array of integers. Write a function which will get that array and return an
// object with 2 properties even6 and odd7. Values of that properties will be
// even6-> array of all positive numbers that are divisible by 6
// odd7-> array of all positive odd numbers that are divisible by 7

function getObjectFromArray(array) {
    return array.reduce((obj, current) => {
        if (current%6 === 0) {
            obj.even6.push(current)
        } else if (current%7 === 0 && current%2) {
            obj.odd7.push(current)
        }
        return obj;
    }, {even6: [], odd7: []});
}
console.log(getObjectFromArray([6, 12, 7, 5, 9]));



// exercise 6 - Create User class. User needs to have name (a string containing only letters),
// age (a number in the range [0, 200])
// and birthdate (only date type), validate that properties by getters and setters.original
// property names need to be private (do it using Symbol)

let name = Symbol('name');
let birthDate = Symbol('birthDate');
class User {
    constructor(Name, BirthDate) {
        this[name] = Name;
        this[birthDate] = BirthDate
    }

    get name() {
        return this[name];
    }

    get age() {
        let today = new Date();
        let age = today.getFullYear() - this[birthDate].getFullYear(); //??
        let m = today.getMonth() - this[birthDate].getMonth();
        if (m < 0 || (m === 0 && today.getDate() < this[birthDate].getDate())) {
            age--;
        }
        return age;
    }

    get birthDate() {
        return this[birthDate];
    }

    set name(value) {
        if (typeof value === 'string' && value.length > 0) {
            return this[name] = value;
        }
    }

    set birthDate(value) {
        if (typeof value === 'string' && /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/.test(value)) {
            return this[birthDate] = value;
        }
    }
}

let user = new User('Davit', '11/11/2019');



// 7) What is the difference ?
//     ------------------------------------------------------
//         1-> function User(name) {
//     this.name = name;
//     this.printName = function() { console.log(this.name);};
// }
// -------------------------------------------------------
//     2-> function User(name) {
//     this.name = name;
// }
//
// User.prototype.printName = function() { console.log(this.name);};
// -------------------------------------------------------------

// in first case created object will have printName property, in second case object will have this property in prototype



// 8) Write a User function constructor which will add name and age properties
// into object. Create Player function constructor, which will extend from User
// and will have own specific method play which will log string “Player player_name is playing”.


function User_2(name, age) {
    this.name = name;
    this.age = age
}

function Player(name, age) {
    User_2.call(this, name, age);
    this.play = function() {console.log(`Player ${this.name} is playing`)}
}

Player.prototype = Object.create(User_2.prototype);

Player.prototype.constructor = User_2;

let player1 = new Player('davit', 22);
player1.play();



// Implement 8 using classes. Add static property counter on Player,
// which will count how many instances of Player class were created.


class User3 {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
}

class Player2 extends User3 {
    static counter = 0;
    constructor(name, age) {
        super(name, age);
        ++Player2.counter
    }
    play() {
        console.log(`Player ${this.name} is playing`)
    }
}

let player2 = new Player2('Arsen', 25);
player2.play();
console.log(Player2.counter);


// 10) Given functions
//
function dbGetEmployee(id, callback) {
    setTimeout(_ => {
        console.log(`Getting ${id}`);
        const employees = [
            {id: 1, name: 'John',  headId: 3},
            {id: 2, name: 'Ann',   headId: 3},
            {id: 3, name: 'Jack',  headId: 4},
            {id: 4, name: 'Tom',   headId: 6},
            {id: 5, name: 'Sarah', headId: 6},
            {id: 6, name: 'Nick',  headId: 7},
            {id: 7, name: 'Lisa',  headId: null}
        ];

        const employee = employees.find(emp => emp.id === id);
        if (employee) {
            callback(null, employee);
            return;
        }
        callback(new Error(`Employee doesn't exist`));
    }, 2000);
}
//
function printHeadOfHead(id) {
    dbGetEmployee(id, (err, res) => {
        if (err) {
            console.error(err);
            return;
        }
        dbGetEmployee(res.headId, (err, res) => {
            if (err) {
                console.error(err);
                return;
            }
            dbGetEmployee(res.headId, (err, res) => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log(res);
            });
        });
    });
}
//
//
// Write wrapper function dbGetEmployeeWrapper which will call dbGetEmployee and return a promise.
//     Rewrite function printHeadOfHead to be promise based.
//     Rewrite function printHeadOfHead to be async/await based.


function dbGetEmployeeWrapper(id) {
    return new Promise(function(resolve, reject) {
        setTimeout(_ => {
            console.log(`Getting ${id}`);
            const employees = [
                {id: 1, name: 'John',  headId: 3},
                {id: 2, name: 'Ann',   headId: 3},
                {id: 3, name: 'Jack',  headId: 4},
                {id: 4, name: 'Tom',   headId: 6},
                {id: 5, name: 'Sarah', headId: 6},
                {id: 6, name: 'Nick',  headId: 7},
                {id: 7, name: 'Lisa',  headId: null}
            ];

            const employee = employees.find(emp => emp.id === id);
            if (employee) {
                resolve(employee);
                return;
            }
            reject(new Error(`Employee doesn't exist`));
        }, 2000);
    })
}


function printHeadOfHeadPromise(id) {
    dbGetEmployeeWrapper(id).then((res) => console.log(res.headId), (err) => console.log(err))
}

async function printHeadOfHeadAsync(id) {
    let res = await dbGetEmployeeWrapper(id);
    console.log(res)
}



// 11) Write a generator named arithmeticProgression which takes 2 parameters: firstElement,
// delta and generates an arithmetic sequence of numbers such that the difference of any two
// successive members of the sequence is a constant (delta). So that
// const ap = arithmeticProgression(5, 3);
// ap.next().value; // 5
// ap.next().value; // 8
// ap.next().value; // 11
// ap.next().value; // 14

function* arithmeticProgression(firstElement, delta) {
    yield console.log(firstElement);
    yield console.log(firstElement + delta);

    while(true) {
        firstElement += delta;
        yield console.log(firstElement + delta);
    }
}

