console.log("SANITY CHECK");

var btn = document.querySelector("#btn");
var car = document.querySelector("#car");
var container = document.querySelector("#container");

// console.log(btn);

// EVENT BUBBLING: when we click on our button
// 1. our click event listener for the button gets triggered, then
// 2. our click event listener for the #container get triggered (parent of our button), then
// 3. click events on body get triggerd (parent of #container)

// IF we dont want to have that bubbling, we can stop it with
// stopPropagation() on the event objects.

container.addEventListener("click", function () {
    console.log("CLICKED THE CONTAINER");
});

btn.addEventListener("click", function (event) {
    console.log("CLICKED THE BUTTON");

    event.stopPropagation(); // stops the bubbling

    // coordinated, the user clicked on
    console.log(event.pageX, event.pageY);

    car.style.display = "block"; // makes car visible again

    //document.querySelector("body"); // this works, but there's a shorter way:
    document.body.style.backgroundColor = "pink";
});

document.body.addEventListener("click", function () {
    console.log("CLICKED THE BODY");
});

var input = document.querySelector("#input");

input.addEventListener("input", function (event) {
    console.log(event.target.value);

    if (event.target.value === "cohort") {
        event.target.value = "TONKABOHNE";
    }
});

var google = document.querySelector("#google");

google.addEventListener("click", function (event) {
    // stop the browser from navigating to the link destination
    event.preventDefault(); // stop browser from doing default action

    console.log("CLICKED ON THE GOOGLE LINK");
});

/*
document.addEventListener("keydown", function (event) {
    console.log("KEYDOWN");
    //console.log(event);
    // http://keycode.info/
    console.log(event.keyCode);
    if (event.keyCode === 32) {
        var h2 = document.createElement("h2");
        var text = document.createTextNode("YOU JUST PRESSED THE SPACEBAR");
        h2.appendChild(text);
        document.body.appendChild(h2);
    }
});
*/
