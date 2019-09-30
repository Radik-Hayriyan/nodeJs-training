import {Observable} from "rxjs";

// exercise 1 - promise.then(f1).catch(f2); vs promise.then(f1, f2); Is equivalent or not and why?(show example)

//no, because .then passes errors to the next .then/catch
//example

// let promise = new Promise(function(resolve, reject) {
//     resolve(1)
// });
//
// promise.then(res => asadasd).catch(err => console.log('is working'));
// promise.then(res => asadasd, err => console.log("doesn't matter")).catch(err => console.log('is working'));


// exercise 2 - Why catch not work and how to fix?
//
// new Promise(function(resolve, reject) {
//   setTimeout(() => {
//     throw new Error("Whoops!");
//   }, 1000);
// }).catch(alert);


//because .catch is a function that runs when the promise is rejected

// new Promise(function(resolve, reject) {
//   setTimeout(() => {
//     reject(new Error("Whoops!"));
//   }, 1000);
// }).catch(err => console.log(err));


// exercise 3 - You have some 3 async functions. Need to create function which get that
// 3 functions and some callback in arguments and call that callback when last async function
// was ending and send that function returning data to callback. That 3 functions have 1 callback arguments

const async1 = (cb) => {
    setTimeout(() => {
        cb(1);
    }, 4000);
};
const async2 = (cb) => {
    setTimeout(() => {
        cb(13);
    }, 6000);
};
const async3 = (cb) => {
    setTimeout(() => {
        cb(5);
    }, 3000);
};
const someCallback = (val) => console.log(val);

function myFunc() {
    let result, count = 0, args = arguments;

    function cb(res) {
        result = res;
        count++;
        if (count === 3) {
            args[args.length - 1](result)
        }
    }

    for (let i = 0; i < args.length - 1; i++) {
        args[i](cb)
    }
}

myFunc(async1, async2, async3, someCallback);


// exercise 4 - You have some 3 async Promises. create some function (like promise all,race ….)
// which will get promises and return some promise which will invoked on last finished promise
// time and will send that last returned value to resolve function, or reject some error on error case

let promise1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve(1)
    }, 4000);
});
let promise2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve(13)
    }, 6000);
});
let promise3 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve(5)
    }, 5000);
});

function my_func() {
    let result, count = 0, args = arguments;

    function resolve(res) {
        result = res;
        count++;
        if (count === 3) {
            console.log(result)
        }
    }

    function reject(err) {
        if (err) {
            console.log(err)
        }
    }

    for (let i = 0; i < args.length; i++) {
        args[i].then(resolve, reject)
    }
}

my_func(promise1, promise2, promise3);


// exercise 5 - You have some 3 async Observables. do same work(like 3 and 4) with observables without using promise(only with observable methods) .

const obs1 = new Observable(observer => {
    setTimeout(() => {
        observer.next(1);
    }, 4000);
});

const obs2 = new Observable(observer => {
    setTimeout(() => {
        observer.next(13);
    }, 6000);
});
const obs3 = new Observable(observer => {
    setTimeout(() => {
        observer.error(new Error());
    }, 5000);
});

function _myFunc() {
    let result, count = 0, args = arguments;

    function resolve(res) {
        result = res;
        count++;
        if (count === 3) {
            console.log(result)
        }
    }

    function reject(err) {
        if (err) {
            console.log(err)
        }
    }

    for (let i = 0; i < args.length; i++) {
        args[i].subscribe(resolve, reject)
    }
}

_myFunc(obs1, obs2, obs3);
