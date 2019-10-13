// exercise 1 - Have 2 functions validateName(which get argument some string and return true
// if it valid name or false otherwise (Name is valid if have 2 parts. like Jon Doe, and not
// empty)) and validateAge(get number argument and return true if value > 19 ).
// Create some functions by currying,so I can filter  list of users by valid name and age.
// (you can use compose or combine if need)
// users example ->
usersList = [
    {
        name: 'Test',
        info: {
            age: 51
        }
    }, {
        name: 'Test Testovich',
        info: {
            age: 18
        }
    }, {
        name: 'Jon Testovich',
        info: {
            age: 21
        }
    }

];

function createValidation(type) {

    if (type === 'number') {
        return function(obj) {
            return obj.info.age > 19;
        }
    }

    return function(obj) {
        return /^[a-zA-Z]+ [a-zA-Z]+$/.test(obj.name);
    }
}

const ageValidation = createValidation('number');
const nameValidation = createValidation('');
console.log(usersList.filter(ageValidation));
console.log(usersList.filter(nameValidation));



//exercise 2 - Make the following object iterable:
let todoList = {
    todoItems: [],
    addItem(description) {
        this.todoItems.push({description, done: false});
        return this;
    },
    crossOutItem(index) {
        if (index < this.todoItems.length) {
            this.todoItems[index].done = true;
        }
        return this;
    }
};

todoList.addItem('task 1').addItem('task 2').crossOutItem(0);

todoList[Symbol.iterator] = function () {
    return {
        current: 0,
        last: this.todoItems.length-1,

        next() {
            if (this.current <= this.last) {
                return {done: false, value: todoList.todoItems[this.current++]};
            } else {
                return {done: true};
            }
        }
    };
};

for (let item of todoList) {
    console.log(item);
}



//exercise 3 - Determine the values logged to the console without running the code. Instead of just
// writing down the values, formulate your thought process and explain to yourself how the code runs line by line.
//
// let errorDemo = function *() {
//     yield 1;
//     throw 'Error yielding the next result';
//     yield 2;
// }
//
// let it = errorDemo();
//
// // Execute one statement at a time to avoid
// // skipping lines after the first thrown error.
//
// console.log( it.next() );
//
// console.log( it.next() );
//
// console.log( [...errorDemo()] );
//
// for ( let element of errorDemo() ) {
//     console.log( element );
// }


//1. first call will print 1
//2. second call will print the thrown error
//3. the expression cannot be finished, because of error
//4. will be printed 1, then the loop will be stopped because of thrown error.


//exercise 4 -  Create an infinite sequence that generates the next value of the Fibonacci sequence.
// The Fibonacci sequence is defined as follows:
// fib( 0 ) = 0
// fib( 1 ) = 1
// for n > 1, fib( n ) = fib( n - 1 ) + fib( n - 2 )


function* fibonacci() {
    yield 0;
    yield 1;

    let first_elem = 0, second_elem = 1, next;

    while(true) {
        next = first_elem + second_elem;
        first_elem = second_elem;
        second_elem = next;

        yield next;
    }
}

let sequence = fibonacci();
console.log(sequence.next().value); // 0
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 2



//exercise 5 - Create async generator function which will get 3 promise arguments and will yeald from latest to first finished promise values
// example -> for
// 	  Promise1 -> (200ms, result: 15),
// 	  Promise2 -> (600ms, result: 17),
// 	  Promise3 -> (500ms, result: 42),
//
// result will be 17,42,15 .


let promise1 = new Promise(function (resolve) {
    setTimeout(() => {
        resolve(15)
    }, 200);
});
let promise2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve(17)
    }, 600);
});
let promise3 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve(42)
    }, 500);
});


async function* my_func() {
    let arr = [], count = -1, args = arguments;
    let p = new Promise((resolve) => {
        function res(res) {
            count++;
            arr[count] = res;
            if (count === 2) {
                resolve(arr)
            }
        }

        for (let i = 0; i < args.length; i++) {
            args[i].then(res)
        }
    });

    arr = await p;

    for (let i = arr.length-1; i >= 0; i--) {
        yield arr[i]
    }
}

(async () => {

    let generator = my_func(promise1, promise2, promise3);
    for await (let value of generator) {
        console.log(value);
    }

})();

