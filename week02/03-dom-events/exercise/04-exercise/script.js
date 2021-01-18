/* Make a page that has on it an element that is 200px by 200px in size and has a solid background color. 
Nest within that element another element that is 50px by 50px in size and has a different solid background color. 
When the user clicks on the outer element its background color should change to a randomly selected color. 
However, if the user clicks on the inner element, the inner element's background color should change to 
a randomly selected background color but the outer element's background color should not change at all. */

// console.log("Test");

var bigbox = document.querySelector(".bigbox");
var smallbox = document.querySelector(".smallbox");

function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function color(event) {
    console.log(event);
    bigbox.style.backgroundColor = getRandomColor();
    console.log(getRandomColor());
}

bigbox.addEventListener("mousedown", color);
bigbox.addEventListener("mouseup", color);

function anotherColor(event) {
    console.log(event);
    smallbox.style.backgroundColor = getRandomColor();
    console.log(getRandomColor());

    event.stopPropagation();
}

smallbox.addEventListener("mousedown", anotherColor);
smallbox.addEventListener("mouseup", anotherColor);
