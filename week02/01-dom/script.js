console.log("SANITY CHECK");

/*for (var i = 0; i < 10; i++) {
    console.log(i);
}*/

/*********************************************************
 * 5 ways you can use to target specific elements by JS
 *********************************************************
 */

// select one element by their id (you dont need the # here)
var mainTitle = document.getElementById("main-title");

console.log(mainTitle);

// element with that id doesn't exist in our html,
// therefore getElementById returns null
var noElement = document.getElementById("non-existing-id"); // null

console.log(noElement);

// with querySelector you can use all the css selectors to target by id, class, tagname...,
// but it will only return the FIRST element that matches the selector
var firstText = document.querySelector(".first-section div");

console.log(firstText);

// with querySelectorAll you can use all the css selectors to target by id, class, tagname...,
// and it will return ALL matching elements as an array-like (NodeList)
var texts = document.querySelectorAll(".first-section div");

console.log(texts);

// target elements by their tag name
// and it will return ALL matching elements as an array-like (HTMLCollection)
var lis = document.getElementsByTagName("li");

console.log(lis);

// target elements by their class
// and it will return ALL matching elements as an array-like (HTMLCollection)
var texts2 = document.getElementsByClassName("text");

console.log(texts2);

// convert array-likes to actual arrays,
// e.g. to have access to all the array functions (filter, map...)
var lisArr = Array.prototype.slice.call(lis); // that will work in basically all browser (also very very old ones)
// var lisArr = Array.from(lis); // won't work in IE11 (https://caniuse.com/?search=Array.from)
console.log(lisArr);

/*********************************************************
 * style elements with JS
 *********************************************************
 */

/*setTimeout(function () {
    mainTitle.style.color = "white";
    mainTitle.style.background = "teal";
    // in JS, dashes are removed and casing is changed to camelCase,
    // margin-top -> marginTop
    mainTitle.style.marginTop = "200px"; // always need to give the unit (px, %...)
    // mainTitle.style.marginTop = 200; // this won't work without the unit
    // unfortunately you can't just set the style directly for a collection of elements
    // texts.style.background = "lightblue"; // Uncaught TypeError: Cannot set property 'background' of undefined
    for (var i = 0; i < texts.length; i++) {
        texts[i].style.background = "lightblue";
    }
/*********************************************************
 * change elements content with JS
 *********************************************************
 */

mainTitle.innerHTML = "TONKABOHNE"; // that will change our headlines text

/*setTimeout(() => {
    // hijacking the complete website and replace all the existing elements
    document.body.innerHTML = "<h1>THIS IS MY WEBSITE NOW";
}, 2000);*/

/*********************************************************
 * removing elements with JS
 *********************************************************
 */
var lastLi = document.querySelector("li:last-child");

console.log(lastLi);

setTimeout(() => {
    lastLi.remove(); // removes element from DOM, so it will disappear
}, 2000);

/*********************************************************
 * create new elements with JS
 *********************************************************
 */

// 1. create new li element
var newLi = document.createElement("li");

// 2. give it some text
var text = document.createTextNode("That's our brand new list item");

// 3. add text to new element (putting text and li together)
newLi.appendChild(text);

// how to style that new element?
// 1. approach: just add all the styling using the style property or
// newLi.style.color = "red";
// newLi.style.fontSize = "24px";

// 2. approach: put your styling in the css file with a new class (.red)
// and add that classname to the new element
newLi.classList.add("red");

// 4. actually putting our element onscreen
document.querySelector(".second-section ul").appendChild(newLi);
