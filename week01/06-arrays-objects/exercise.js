/* ------------------ Exercises ---------------------

1. 
Write a function called each that accepts either an object or an array as its first parameter 
and a callback as its second parameter.

If the first parameter is an object, it should loop over the object's properties and call the callback for each one. 
The property value should be the first parameter passed to the callback and the property name should be the second.

If the first parameter is an array, it should loop over the array's elements and call the callback for each one. 
The array element should be the first parameter passed to the callback and the index should be the second. */

function each(objOrArr, isFunction){
    if (typeof objOrArr === true) {
        for(var i = 0; i < objOrArr.length; i++) {
            isFunction(objOrArr.key, key);
        }
    } else (Array.isArray(objOrArr) === true){
        isFunction(obOrArr[i],i); 
    }

} 



console.log()


/*
2.
Write a function that takes an array as a parameter and returns a new array 
containing all of the items that are in the array that was passed in but in reverse order. 
Unlike the reverse method that all arrays have, this function should leave the original array unchanged.

*/

var originalArr = [1, 2, 3];

function reverseOrder(originalArr) {
    var newArray = [];
    for (var i = originalArr.length - 1; i >= 0; i--);
    {
        newArray = originalArr[i];
    }
    return newArray;
}

console.log(reverseOrder(originalArr));

/*3. 
Write a function called getLessThanZero that expects an array of numbers 
to be passed to it and returns a new array containing only those numbers from the array 
that was passed in that are less than zero.
*/

//var anotherArray = [-2, -1, 0, 1, 3]

function getLessThanZero(arrOfNumbers) {
    var newArray = arrOfNumbers.filter(function (number) {
        if (number < 0) {
            return true;
        }
    });
    return newArray;
}

console.log(getLessThanZero([-2, -1, 0, 1, 3]));
