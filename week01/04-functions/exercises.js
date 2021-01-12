/* ------------------EXERCISES-------------------- */
/* 1.

Write a function that takes any number of numbers as arguments and returns the sum of those numbers.

sum(5, 10); //15

sum(5, 10, 15); //30;

sum(5, 10, 15, 100, 200); //330


function greet() {
    // If you don't know the number of possible arguments in advance,
    // you can use the arguments variable to access all arguments in a dynamic way.
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]); // array-like of the function arguments
    }
}*/
function sum() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    if (typeof i === "number") {
        return sum;
    }
}
console.log(sum(5, 10));

/* 2. 
Write a function that takes another function as an argument. 
It should wait 1.5 seconds and then run the function that was passed in.*/

function waitThenRun() {
    console.log("Goodbye!");
}

setTimeout(waitThenRun, 1500);

setTimeout(function () {
    console.log("Hello!");
}, 1500);

/*waitThenRun(function() {
     console.log('Hello!');
     waitThenRun(function() {
         console.log('Goodbye!');
     }); // logs 'Goodbye!' 1.5 seconds later
 }); // logs 'Hello!' 1.5 seconds later */

/* 3

Write a function that expects a number as an argument. 
If the value that is passed in is less than 0, equal to 0, or not a number, 
the function should return the string 'ERROR'. 
If the number that is passed in is greater than or equal to 1000000 it should simply return the number. 
Otherwise it should multiply the number by 10 however many times it takes to get a number that 
is greater than or equal to 1000000 and return that. */

function myFn(num) {
    if (num <= 0 || Number.isNaN(num) || typeof num === "number") {
        console.log("ERROR");
    } else if (num >= 1000000) {
        console.log(num);
    } else {
        while (num >= 1000000) {
            num = num * 10;
        }
        return num;
    }
}
myFn(2);

/*function countdown(num) {
        console.log(num);

    
        // break condition
        if (num > 1) {
            countdown(num - 1); // function calls itself
        }
    }
    
    countdown(10);*/
