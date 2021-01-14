/*console.log("SANITY CHECK");

for (var i = 0; i < 10; i++) {
    console.log(i);
}

-----------------------------------Exercises-----------------------------------------
1. Write a function that expects a string representing a selector to be passed as a parameter. 
The function should find all the elements in the document that match the selector and 
change their style so that the text they contain is italic, underlined, and bold.
*/

function findAllElements(repSelector) {
    var secondSection = document.querySelectorAll(repSelector);
    for (var i = 0; i < secondSection.length; i++) {
        (secondSection[i].style.fontStyle = "italic"), "bold";
        secondSection[i].style.textDecoration = "underline";
    }
}
console.log(findAllElements(".second-section"));

/* 2.
 Write a function that expects a string representing a class name to be passed as a parameter. 
The function should return an array containing all the elements in the document that have the class that was passed in.*/

function returnArray(repClassName) {
    var arrLike = document.getElementsByClassName(repClassName);
    var anArray = Array.prototype.slice.call(arrLike);
    return anArray;
}

console.log(returnArray("first-section"));

/*3. 
Write a function that inserts an element into the body of the currently loaded page. 
That element should have fixed position, z-index of 2147483647, left of 20px, top of 100px, 
font-size of 200px, and contain the text 'AWESOME'.*/

document.body.onload = insertElement;

function insertElement() {
    var newElement = document.createElement("h3");
    var text = document.createTextNode("AWESOME");
    newElement.appendChild(text);
    document.querySelector("body").appendChild(newElement);
}
