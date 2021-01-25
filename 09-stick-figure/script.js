/*console.log("Test");

var cloud = document.querySelector(".cloud");
console.log(cloud);

var left = cloud.offsetLeft; // initial position of the box from the left in px
function animateBox() {
    left--;
    console.log("left", left); // that's just the left position as a number -> 714
    console.log(left + "px"); // concatenates strings -> "714px";
    cloud.style.left = left + "px"; // we always have to give it a unit (px)
    // our animation will keep running,
    // till left is lesser than or equal to 100.
    // as soon as the box is completely off-screen, the animation stops.
    if (left > -100) {
        requestAnimationFrame(animateBox);
    }
    // our animation will keep running endlessly.
    // as soon as our box get off-screen, we reset left to 800,
    // so it starts from the right position all over again.
    if (left <= -cloud.offsetWidth) {
        left = 800;
    }
    requestAnimationFrame(animateBox);
}
animateBox();*/
