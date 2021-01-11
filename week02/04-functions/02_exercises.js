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
