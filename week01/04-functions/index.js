// "use strict"; // enable strict mode

/* ------ SCOPING: variable access ------ */
/* -------------------------------------- */

// global scope
var a = 100;

// c = 30; // you should NEVER leave out the var keyword when creating variables,
// because it will move the variable to the global scope.
// In strict mode: ReferenceError: c is not defined

//console.log(c);

// each function creates it's own local scope,
// every variable will only exist within that function's local scope
function fn() {
    // local scope of fn
    var b = 20;

    console.log("a", a); // we have access to the variable a from inside fn
    console.log("b", b); // we have acces to the variable b from inside fn
}

fn();

console.log("a", a); // we have access to the variable a
// console.log("b", b); // ReferenceError: b is not defined

function hi() {
    // inside local scope of the function hi
    var name = "Tonkabohne";
    console.log("Hi", name);
}

function bye() {
    // inside local scope of the function bye
    //console.log("Bye", name); // ReferenceError: name is not defined
}

hi();
bye();

var num = 2; // global scope

function myOuterFn() {
    // inside local scope of myOuterFn
    // which means we have access to: myOuterFn, global
    var name = "Tonkabohne";

    function myInnerFn() {
        var bootcamp = "SPICED";

        // inside local scope of myInnerFn,
        // which means we have access to: myInnerFn, myOuterFn, global
        console.log("num", num);
        console.log("name", name);
        console.log("bootcamp", bootcamp);
    }

    // console.log(bootcamp); // ReferenceError: bootcamp is not defined

    myInnerFn();
}

myOuterFn();

// closures: nested functions to hide variables from the global scope

/*var uid = 0; // currently in global scope, but we want to protect that variable
function getUid() {
    uid++;
    return uid;
}*/

function getUidFactory() {
    var uid = 0;

    return function getUid() {
        uid++;
        return uid;
    };
}

var getUid = getUidFactory();

console.log(getUid()); // 1
console.log(getUid()); // 2
console.log(getUid()); // 3

/* ------ HOISTING ---------------------- */
/* -------------------------------------- */
// JavaScript moves all variable declarations and function declarations to the very top of you program

// That's the code we write
console.log(color); // undefined (we are trying to access a variable before its declaration)

var color = "purple"; // declaring the variable color & assigning the value "purple" to it

// That's what JS does:
/*var color; // declarations are moved to the top of your program
console.log(color);
color = "purple";*/

//console.log(fancyColor); // ReferenceError: fancyColor is not defined

var otherColor; // declaring the variable otherColor

console.log(color, otherColor);

otherColor = "pink"; // assigning the value "pink"

console.log(otherColor);

// thanks to hoisting, we can use functions before their declaration
console.log(square(4)); // 16

// function declaration
function square(num) {
    return num * num;
}

console.log(square(2)); // 4

// We can't use functions that are created by function assignments before their assignment,
// because only the declaration is hoisted, but not the assignment.
// So: squareIt is undefined
// console.log(squareIt(5)); // TypeError: squareIt is not a function

// function assignement
var squareIt = function (num) {
    return num * num;
};

console.log(squareIt(3)); // 9

/* ------ CALLBACKS --------------------- */
/* -------------------------------------- */
// pass one function as an argument to another function

function logStuff() {
    console.log("HI IM THE LOG STUFF FUNCTION");
}

// logStuff();

// executes our logStuff function after 2s (2000ms)
// we are using logStuff as a callback function for setTimeout
setTimeout(logStuff, 2000);

// anonymous functions: functions without a name
setTimeout(function () {
    console.log("LOG STH TO THE CONSOLE AFTER 5s");
}, 5000);

/* ------ ARGUMENTS --------------------- */
/* -------------------------------------- */

function greet() {
    // If you don't know the number of possible arguments in advance,
    // you can use the arguments variable to access all arguments in a dynamic way.
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]); // array-like of the function arguments
    }
}

greet("Kelly", "Sarah", "Denis");

/* ------ RECURSION --------------------- */
/* -------------------------------------- */
// function that calls itself, unless it doesn't.
// Everything recursion can solve, can also be solved by loops.
// Depending on the problem, the recursive solution or the solution using loops might be more elegant.

/*for (var i = 10; i >= 1; i--) {
    console.log(i);
}*/

function countdown(num) {
    console.log(num);

    // break condition
    if (num > 1) {
        countdown(num - 1); // function calls itself
    }
}

countdown(10);
