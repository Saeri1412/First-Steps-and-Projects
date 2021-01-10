/* 
1. Write a function named logType that expects a single argument 
and logs a different string depending on the type/value of the argument that is passed to it. 
The string it logs should be one of the following:

"undefined!"
"null!"
"number!"
"not a number!"
"string!"
"boolean!"
"bigint!"
"function!"
"object!"
"array!"
"I have no idea!"

Note that you have no way to test the final case. 
The only thing that could make "I have no idea!" appear is a symbol, and we have not yet discussed how to make one of those. */

function logType(i) {
    if (Number.isNaN(i)) {
        console.log("not a number!");
    } else if (typeof i === "number") {
        console.log("number!");
    } else if (typeof i === "string") {
        console.log("string!");
    } else if (typeof i === "boolean") {
        console.log("boolean!");
    } else if (typeof i === "bigint") {
        console.log("bigint");
    } else if (Array.isArray(i)) {
        console.log("array!");
    } else if (typeof i === "object") {
        console.log("object!");
    } else if (typeof i === "function") {
        console.log("function");
    } else if (i === null) {
        console.log("null!");
    } else if (typeof i === "undefined") {
        console.log("undefined!");
    } else if (Array.isArray(i)) {
        console.log("array!");
    } else {
        console.log("I have no idea!");
    }
}

logType(null);

// 2. Copy the following link into your code:
var a = {
    Berlin: "Germany",
    Paris: "France",
    "New York": "USA",
};

/* 
 Then create a new empty object b and use a for..in loop to iterate over all of a's properties. 
 Give b properties whose names are the values from a and whose values are the property names from a. 
 The result should be an object that looks like this:
 */

/*var b = {
    Germany: "Berlin",
    France: "Paris",
    USA: "New York",
};*/

/*for (var b in a) {
    console.log("The property of " + b + " is " + a[b]);
}*/
var b = {};

/*for (var b in a) {
    console.log(a[b] + ": " + '"' + b + '"' + ",");
}*/

var b = {};

for (var property in a) {
    b[a[property]] = property;
}

console.log(b);

/* 3. Write a while or for loop that counts down from 10 to 1, logging each number to the console. */

for (i = 10; i >= 1; i--) {
    console.log(i);
}
