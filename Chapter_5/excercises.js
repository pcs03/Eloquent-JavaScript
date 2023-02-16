const SCRIPTS = require("./05_higher_order/code/scripts.js");

require("./05_higher_order/code/scripts.js");

// Flattening

/* 
Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.
*/

function flatten(array) {
    return array.reduce((a, b) => {
        return a.concat(b);
    })
};

let array = [[1,2,3],[4,5,6],[7,8,9]];

// console.log(flatten(array));4
// console.log("this was deceptively easy")

// You own loop

/*
Write a higher-order function loop that provides something like a for loop statement. It takes a value, a test function, an update function, and a body function. Each iteration, it first runs the test function on the current loop value and stops if that returns false. Then it calls the body function, giving it the current value. Finally, it calls the update function to create a new value and starts from the beginning.

When defining the function, you can use a regular loop to do the actual looping.
*/

function loop(value, test, update, body) {
    while (test(value)) {
        body(value);
        value = update(value);
    }
}

// loop(3, n => n > 0, n => n - 1, console.log)

// Everything

/* 
Analogous to the some method, arrays also have an every method. This one returns true when the given function returns true for every element in the array. In a way, some is a version of the || operator that acts on arrays, and every is like the && operator.

Implement every as a function that takes an array and a predicate function as parameters. Write two versions, one using a loop and one using the some method.
*/

function everyUsingLoop(array, f) {
    let falseCounter = 0;
    for (let element of array) {
        if (!f(element)) falseCounter++;
    }
    return falseCounter > 0 ? false : true;
}

// console.log(every([1,2,3,5,6,7,8,9], n => n < 10));

function everyUsingSome(array, f) {
    return !array.some(element => !f(element));
}

//console.log(everyUsingSome([1,2,3,4,5,6,7,8,9], n => n < 10));


// Dominant writing direction

/* 
Write a function that computes the dominant writing direction in a string of text. Remember that each script object has a direction property that can be "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).

The dominant direction is the direction of a majority of the characters that have a script associated with them. The characterScript and countBy functions defined earlier in the chapter are probably useful here.
*/

// main function

function scriptDirection(text) {
    let directions = [];
    for (let char of text) {
        directions.push(charToDirection(char));
    }
    let directionsCount = countArray(directions.filter(value => value !== undefined));

    let dominantDirection = {name: null, count: 0};
    for (let object of directionsCount) {
        if (object.count > dominantDirection.count) {
            dominantDirection = object;
        }
    }
    return dominantDirection.name;
}

function charToDirection(char) {
    let unicode = char.codePointAt(0);
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return unicode >= from && unicode < to;
        }))
        return script.direction;
    }
}

function countArray(array) {
    let counts = [];
    for (let element of array) {
        let known = counts.findIndex(c => c.name === element);
        if (known === -1) {
            counts.push({name: element, count: 1});
        } else {
            counts[known].count++;
        }
    }
    return counts;
}

console.log(scriptDirection("Русский военный корабль иди на хуй, Русский военный корабль иди на хуй, الله أكبرالله أكبرالله أكبرالله أكبرالله أكبرالله أكبرالله أكبرالله أكبرالله أكبرالله أكبرالله أكبرالله أكبرالله أكАллах бол хамгийн агууАллах бол хамгийн агууАллах бол хамгийн агууبرالله أكبر иди на хуй Fuck Russia"))