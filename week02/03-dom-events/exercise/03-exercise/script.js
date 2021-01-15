/*Make a page that has on it an element that is 100px by 100px in size and has a solid black border. 
When the user mouses down on this box, its background should change to a randomly selected color. 
When the user mouses up on it, its background should change to another randomly selected color.*/

//console.log("Test");

var div = document.querySelector("div");

function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function color(event) {
    console.log(event);
    div.style.backgroundColor = getRandomColor();
    console.log(getRandomColor());
}

div.addEventListener("mousedown", color);
div.addEventListener("mouseup", color);
