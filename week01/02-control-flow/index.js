// conditions and truthy / falsy
if (true) {
    // we will always end up in here
}

if (false) {
    // we will never end up in here
}

if (1) {
    // truthy for all numbers, except...
    // we will always end up in here
}

if (0) {
    // falsy for the number 0
    // we will never end up in here
}

if ("Hello World") {
    // truthy for all strings, except...
    // we will always end up in here
}

if ("") {
    // falsy for the empty string
    // we will never end up in here
}

if (undefined) {
    // falsy for undefined
    // we will never end up in here
}

if (null) {
    // falsy for null
    // we will never end up in here
}

// objects, arrays, functions are always truthy,
// also for empty arrays and objects
if ([]) {
    // truthy for all strings, except...
    // we will always end up in here
}

// logical operators:
if (true && false) {
    // we don't end up in here, because at least one part of the condition is falsy
}

if (true || false) {
    // we  end up in here, because at least one part of the condition is truthy
}

// comparisions
console.log(3 > 1); // true
console.log(3 < 1); // false

console.log(3 >= 3); // true
console.log(2 <= 2); // true

console.log(2 == 2); // true

console.log(2 == "2"); // true

console.log(2 === "2"); // strict equality check -> false

// loops

var i = 0;

while (i <= 5) {
    console.log(i);

    i++;
}

for (var j = 0; j <= 5; j++) {
    console.log(j);
}

var colors = ["blue", "red", "green"];

// for-of-loop, convenient way to loop over arrays
for (var color of colors) {
    console.log(color);
}

var cohort = {
    name: "Tonkabohne",
    students: ["Kelly", "Sarah", "Denis"],
    excitement: 100,
};

console.log(cohort.name); // if we want to access static properties of an object, we can use the . notation

// for-in-loop, convenient way to loop over arrays
for (var property in cohort) {
    console.log(property, cohort[property]); // if we want to access dynamic properties of an object, we have to use the [] notation
}

function logType(val) {
    // TODO: lots of if / else expressions
}

logType("Hello String");
logType(undefined);
logType(null);
