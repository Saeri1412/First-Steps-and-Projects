console.log("SANITY CHECK");

// create new local scope for our script.js file,
// so we don't have to think about naming collissions with other
// JS files linked in the very same website.
// IIFE: immediately invoked function expression
(function () {
    // selecting our canvas element
    var canvas = document.querySelector("#canvas");

    // setting the context of the canvas.
    // we want to work in plane with 2 dimensions -> 2d.
    // but canvas is super powerful, you could also get a 3d ctx.
    var ctx = canvas.getContext("2d");

    ctx.beginPath(); // start of a new shape

    // color of what we are going to draw
    ctx.strokeStyle = "blue";

    // the width of the lines we are going to draw
    ctx.lineWidth = 5;

    // moving to the starting position of our shape
    ctx.moveTo(250, 50);

    // drawing our lines (instructions)
    ctx.lineTo(350, 200);

    ctx.lineTo(150, 200);

    ctx.lineTo(250, 50);

    ctx.closePath(); // will fix non-perfect edges

    // actually draw all the instructions above to the canvas
    ctx.stroke();

    // optionally: fill our triangle
    ctx.fillStyle = "lightblue";

    ctx.fill();

    // start a new shape
    ctx.beginPath();

    ctx.arc(250, 100, 40, 0, 2 * Math.PI);

    ctx.fillStyle = "pink";

    ctx.stroke();
    ctx.fill();

    console.log(canvas);

    // clears everything
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
})();
