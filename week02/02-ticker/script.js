console.log("SANITY CHECK");

var ticker = document.querySelector(".ticker");
var headlines = document.querySelectorAll(".ticker a");

// important that the declaration is on global scope, because we want to be able to use that variable
// both in our mouseeenter event listener & in our animateTicker function
var reqId;

for (var i = 0; i < headlines.length; i++) {
    headlines[i].addEventListener("mouseenter", function (event) {
        console.log("ENTERED LINK WITH MOUSE");

        console.log(event.target); // event.target will always give us a reference to element that we applied the eventLister on

        // TODO:
        // 1. change styling of that link: underlined + different color
        // 2. pause our ticker animation
        cancelAnimationFrame(reqId);
    });
    headlines[i].addEventListener("mouseleave", function (event) {
        console.log("LEFT LINK WITH MOUSE");

        console.log(event.target); // event.target will always give us a reference to element that we applied the eventLister on

        // TODO:
        // 1. change styling of that link: remove underlined + change back to default color
        // 2. resume our ticker animation
    });
}

// console.log(headlines);
// console.log(ticker);

var left = ticker.offsetLeft;

function animateTicker() {
    left--;

    ticker.style.left = left + "px";

    var firstHeadline = document.querySelector(".ticker a:first-child");

    if (left <= -firstHeadline.offsetWidth) {
        console.log("FIRST HEADLINE IS COMPLETELY OFF-SCREEN");

        // 1. move first headline to the end of the ticker as soon as it is completely off-screen
        ticker.appendChild(firstHeadline); // this will MOVE the headline from first position to end of the ticker container

        // 2. adjust the left property of the ticker (reset it to 0),
        // so that the former 2nd headline (now first headline) stays in place.
        left = 0;
    }

    // will return a number to us, which is an id of that requestAnimationFrame call.
    // And we can use that id to cancel the animation request.
    reqId = requestAnimationFrame(animateTicker);
}

animateTicker(); // kick-off animation

console.log(left);

/*
var box = document.querySelector(".box");
console.log(box);
var left = box.offsetLeft; // initial position of the box from the left in px
function animateBox() {
    left--;
    console.log("left", left); // that's just the left position as a number -> 714
    console.log(left + "px"); // concatenates strings -> "714px";
    box.style.left = left + "px"; // we always have to give it a unit (px)
    // our animation will keep running,
    // till left is lesser than or equal to 100.
    // as soon as the box is completely off-screen, the animation stops.
    if (left > -100) {
        requestAnimationFrame(animateBox);
    }
    // our animation will keep running endlessly.
    // as soon as our box get off-screen, we reset left to 800,
    // so it starts from the right position all over again.
    if (left <= -box.offsetWidth) {
        left = 800;
    }
    requestAnimationFrame(animateBox);
}
animateBox();*/
