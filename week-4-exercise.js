// exercise 1 - Create a Rectangle class. Rectangle should have: length and width.
// It should have getters and setters for all fields.
// It should have getArea() method.
// It should have getPerimeter() method.
// It should have a toString method

class Rectangle {
    constructor(length, width) {
        this._length = length;
        this._width = width;
    }

    get length() {
        return this._length;
    }

    get width() {
       return this._width;
    }

    set length(length) {
        if (typeof length === 'number' && length > 0) {
            return this._length = length;
        }
    }

    set width(width) {
        if (typeof width === 'number' && width > 0) {
            return this._width = width;
        }
    }

    getArea() {
        return this._length * this._width;
    }

    getPerimeter() {
        return (this._length + this._width)*2;
    }

    toString() {
        return `triangle with length: ${this._length} and width: ${this._width}`
    }
}



// exercise 2 - Create an object called shape that has the type property and a getType() method.
// Define a Triangle() constructor function whose prototype is shape. Objects created with Triangle()
// should have three properties — a, b, and c, representing the lengths of the sides of a triangle.
// Add a new method to the prototype called getPerimeter()

let shape = {
    type: 'triangle',
    getType() {
        return this.type
    }
};

function Triangle(side1Length, side2Length, side3Length) {
    this.a = side1Length;
    this.b = side2Length;
    this.c = side3Length
}

Triangle.prototype = shape;
Triangle.prototype.getPerimeter = function() {
    return this.a + this.b + this.c;
};
Triangle.prototype.constructor = Triangle;
let t = new Triangle(1, 2, 3);

console.log(t.constructor === Triangle, shape.isPrototypeOf(t), t.getPerimeter(),  t.getType());




// exercise 3 - Create an Author class and a Book class.
// Author should have: name, email, gender.
// It should have getters.
// It should have a toString method.
//
// Book should have: title, author(Author), price, quantity.
// It should have appropriate getters and setters.
// It should have a method: getProfit(), which calculates the profit from the book based on the price and quantity.
// It should have a toString method.


class Author {
    constructor(name, email, gender) {
        this._name = name;
        this._email = email;
        this._gender = gender
    }

    get name() {
        return this._name;
    }

    get email() {
        return this._email;
    }

    get gender() {
        return this._gender;
    }

    set name(name) {
        if (typeof name === 'string' && name.length > 0) {
            return this._name = name;
        }
    }

    set email(email) {
        if (typeof email === 'string' && /\S+@\S+\.\S+/.test(email)) {
            return this._email = email;
        }
    }

    set gender(gender) {
        if (typeof gender === 'string' && (gender === 'Male' || gender === 'Female')) {
            return this._gender = gender;
        }
    }

    toString() {
        return `Author with name: ${this._name} and email: ${this._email}`
    }
}


class Book {
    constructor(title, author, price, quantity) {
        this._title = title;
        this._author = author;
        this._price = price;
        this._quantity = quantity;
    }

    get title() {
        return this._title;
    }

    get author() {
        return this._author;
    }

    get price() {
        return this._price;
    }

    get quantity() {
        return this._quantity;
    }

    set title(title) {
        return this._title = title;
    }

    set author(author) {
        if (author instanceof Author) {
            return this._author = author;
        }
    }

    set price(price) {
        if (typeof price === 'number' && price > 0) {
            return this._price = price;
        }
    }

    set quantity(quantity) {
        if (typeof quantity === 'number' && quantity >= 0) {
            return this._quantity = quantity;
        }
    }

    getProfit() {
        return this._price * this._quantity;
    }

    toString() {
        return `Book with title: ${this._title} and price: ${this._price}`
    }
}



// exercise 4 - What is output and why?
//
// function test (name) {
//    this.fullName = `My name is ${name}`;
//    this.age = 5;
//    return this.age;
// }

// 	a )new test(’Some Name’);

// in this case function test is called as constructor function, so the output will be the object {age: 5, fullName: 'My name is Some Name'}

// 	b)  test('Some Name’)

// the output will be 5




// exercise 5 - What is output and why?
//
// function test (name) {
//    this.fullName = `My name is ${name}`
//    this.age = 5;
//    return {
//        age: this.age
//    };
// }
//
// 	a )new test(’Some Name’);
// 	b)  test('Some Name’)

// despite the fact that function test is called differently, in both cases it returns an object, so the output will be the object {age: 5'}




// exercise 6 - What will be the output of the following code and why?
//
//
// var Animal = function (name, type) {
//    this.kind = name,
//        this.breed = type
// }
//
// var playground = {
//    animals: [],
//
//    addAnimal(animal) {
//        this.animals.push(animal);
//    },
//
//    listAnimalKind(kind) {
//        this.animals.forEach(function (animal) {
//            if (animal.kind == kind) {
//                console.log(animal.breed);
//            }
//        });
//    }
// }
//
// playground.addAnimal(new Animal('dog', 'Labrador'));

//there is no return in addAnimal method, so object {kind: 'dog', breed: 'labrador'} will be pushed to array animals
// and the output will be undefined, the same in next 2 cases

// playground.addAnimal(new Animal('dog', 'Goldren Retriever'));
// playground.addAnimal(new Animal('rabbit', 'Angola'));
// playground.listAnimalKind('dog');

// now we have animals array with 3 object elements, so the output will be 'labrador', 'golden retriever'





// exercise 7 - Write Car class, which have
// properties:
// 	static finishPosition: number
// 	name: string,
// 	 color: string(hashcode of color),
// 	 currentPosition: number(on start it equal to 0),
// 	 intervalPinter: number(setInterval pointer, that need for stopping interval)
// 	 speed: number(ex. 10, it means car can go 10px for 1 second),
// methods:
// 	reset() -> it will reset currentPosition to 0
// 	start() -> it should update currentPosition value by speed each 300ms(with setInterval)
// and log it to console, if currentPosition equal or more then finishPosition, then call stop method
// 	stop() -> will stop interval and log`[name] car was finished`
//
// set some finishPosition value for Car
// create 3 Cars with different parameters
// create function that will start car competition


let Car = class {
    constructor(name, color, speed) {
        this.name = name;
        this.color = color;
        this.speed = speed;
        this.currentPosition = 0;
        this.intervalPointer = 0;
    }

    static finishPosition = 50;

    reset() {
        return this.currentPosition = 0;
    }

    stop() {
        setTimeout(() => { clearInterval(this.interval); console.log(this.name); }, 0);
        this.reset();
    }
};

let carsCompetition = {
    start() {
        this.interval = setInterval(() => {
            this.intervalPointer  = (this.intervalPointer*10 + 3)/10;
            this.currentPosition = this.intervalPointer * this.speed;
            console.log(this.currentPosition);
            if (this.currentPosition >= Car.finishPosition) {
                this.stop()
            }
        }, 300);
    },
};

function startCompetition(car1, car2, car3) {
    if (car1 instanceof Car && car2 instanceof Car && car3 instanceof Car) {
        carsCompetition.start.call(car1);
        carsCompetition.start.call(car2);
        carsCompetition.start.call(car3);
    }
}

let car1 = new Car('audi', '#00ffff', 60);
let car2 = new Car('mercedes', '#ff0000', 70);
let car3 = new Car('ERAZ', '#ff66ff', 90);

startCompetition(car1, car2, car3);



// exercise 8 - Write 7) with function prototype style


let _Car = function(name, color, speed) {
    this.name = name;
    this.color = color;
    this.speed = speed;
    this.currentPosition = 0;
    this.intervalPointer = 0;
};

_Car.finishPosition = 50;
_Car.prototype.reset = function() {
    return this.currentPosition = 0;
};
_Car.prototype.stop = function() {
    setTimeout(() => { clearInterval(this.interval); console.log(this.name); }, 0);
    this.reset();
};

let _carsCompetition = {
    start() {
        this.interval = setInterval(() => {
            this.intervalPointer  = (this.intervalPointer*10 + 3)/10;
            this.currentPosition = this.intervalPointer * this.speed;
            console.log(this.currentPosition);
            if (this.currentPosition >= _Car.finishPosition) {
                this.stop()
            }
        }, 300);
    },
};

function _startCompetition(car1, car2, car3) {
    if (car1 instanceof _Car && _car2 instanceof _Car && _car3 instanceof _Car) {
        _carsCompetition.start.call(car1);
        _carsCompetition.start.call(car2);
        _carsCompetition.start.call(car3);
    }
}

let _car1 = new _Car('audi', '#00ffff', 60);
let _car2 = new _Car('mercedes', '#ff0000', 70);
let _car3 = new _Car('ERAZ', '#ff66ff', 90);

_startCompetition(_car1, _car2, _car3);