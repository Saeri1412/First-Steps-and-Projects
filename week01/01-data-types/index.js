// 7 primitive data types
var str = "Hello World";

console.log(typeof str); // "string"

var num1 = 17; // integer

console.log(typeof num1); // "number"

var num2 = 1.7; // floats

console.log(typeof num2); // "number"

var notANumber = "Hello World" * 5; // NaN - not a number

console.log("typeof notAnumber:", typeof notANumber); // "number"

// two function to check for NaN, with a slight difference:
console.log("isNaN:", isNaN("as")); // try to convert to a number first -> true
console.log("Number.isNaN", Number.isNaN("as")); // doesn't try to convert -> false

// limit for working with normal numbers in JS
console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);

// If you need to work with bigger numbers, there's the BigInt data type:
var bigNum = 9007199254740992n; // BigInt

console.log(typeof bigNum); // "bigint"

var symbol = Symbol();

console.log(typeof symbol); // "symbol"

var bool1 = true;

console.log(typeof bool1); // "boolean"

var bool2 = false;

console.log(typeof bool2); // "boolean"

var nothing; // undefined

console.log(typeof nothing); // "undefined"

var alsoNothing = null;

console.log(typeof null); // "object", we can't use typeof to check for null

console.log(alsoNothing === null); // that's how we can check for null

// complex data types
var obj = {};

console.log(typeof obj); // "object"

var arr = [];

console.log(typeof arr); // "object"

// we can check for array with:
console.log(Array.isArray(arr)); // true

function hello() {
    console.log("hello");
}

console.log(typeof hello); // "function"
