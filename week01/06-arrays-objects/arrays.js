/*var colors; // declare variable named colors
colors = []; // assigning a new array to our colors variable*/

var hedgehogs = ["🦔", "🦔", "🦔", "🦔", "🦔"]; // array of hedgehogs

var colors = ["green", "lavendar", "red", "blue", "yellow"];

var index = colors.indexOf("red");

console.log(index); // 2

// DOESNT change original array, it will create a copy of that array
var filteredColors = colors.filter(function (color) {
    console.log(color, color.length);

    if (color.length > 4) {
        return false; // if we return false, filter will remove that item from the resulting array
    } else {
        return true; // if we return true, filter will keep that item in the resulting array
    }
});

console.log("colors", colors);
console.log("filteredColors", filteredColors);

// change (mutate) your original array
//var removedColors = colors.splice(2, 2); // remove 2 elements starting from the index 2 (red, blue)

//console.log("removedColors", removedColors);

//console.log(colors); // [ 'green', 'lavendar', 'yellow' ]

// doesn't change (mutate) your original array, creates a copy of your original array
/*var slicedColors = colors.slice(2, 4);

console.log("slicedColors", slicedColors); // [ 'red', 'blue' ]

console.log("colors", colors); // original colors array is unchanged! still has all 5 colors

var slicedColorsTillTheEnd = colors.slice(2); // you can leave out the 2nd parameter (end)

console.log("slicedColorsTillTheEnd", slicedColorsTillTheEnd);


var colorsCopy = colors.slice(); // using slice without parameters will just create a copy of the array

console.log("colors", colors);
console.log("colorsCopy", colorsCopy);
console.log(colors === colorsCopy); // false, because they are 2 dedicated arrays (both with their own reference)

var colors2 = colors; // this is NOT creating a copy of the colors array, it just gives you another variable to access the very same array (reference)
console.log("colors", colors);
console.log("colors2", colors2);
console.log(colors === colors2); // true, because both variables share same reference to very same array
*/

/*
console.log(colors.length); // number of elements in that array

console.log(colors[0]); // first element in the array

console.log(colors[colors.length - 1]); // last element in the array

console.log(2 === 2); // true; primitive data types are compared by value

console.log("Hello" === "Hello"); // true

console.log([] === []); // false; complex data types are compared by reference

console.log(colors === colors); // true

colors.push("grey"); // add element to the very end of the array

console.log("AFTER PUSH", colors);

var removedItem = colors.pop(); // remove last element from the array
console.log("removedItem", removedItem);
console.log("AFTER POP", colors);

colors.unshift("white");
console.log("AFTER UNSHIFT", colors);

var removedColor = colors.shift();
console.log("removedColor", removedColor);
console.log("AFTER SHIFT", colors);*/
