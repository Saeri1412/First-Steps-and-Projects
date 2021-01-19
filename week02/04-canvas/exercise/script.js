console.log("SANITY CHECK");

(function () {
    var canvas = document.querySelector("#canvas");

    var ctx = canvas.getContext("2d");

    // head
    ctx.beginPath();

    ctx.arc(500, 150, 40, 0, 2 * Math.PI);

    ctx.fillStyle = "pink";

    ctx.strokeStyle = "black";

    ctx.lineWidth = 5;

    ctx.closePath();

    ctx.stroke();
    ctx.fill();

    // body
    ctx.beginPath();

    ctx.strokeStyle = "black";

    ctx.lineWidth = 5;

    ctx.moveTo(500, 190);

    ctx.lineTo(500, 400);

    ctx.stroke();

    // right arm
    ctx.beginPath();

    ctx.strokeStyle = "black";

    ctx.lineWidth = 5;

    ctx.moveTo(500, 250);

    ctx.lineTo(600, 180);

    ctx.stroke();

    // left arm
    ctx.beginPath();

    ctx.strokeStyle = "black";

    ctx.lineWidth = 5;

    ctx.moveTo(500, 250);

    ctx.lineTo(400, 180);

    ctx.stroke();

    // left leg
    ctx.beginPath();

    ctx.strokeStyle = "black";

    ctx.lineWidth = 5;

    ctx.moveTo(500, 400);

    ctx.lineTo(400, 500);

    ctx.stroke();

    // right leg
    ctx.beginPath();

    ctx.strokeStyle = "black";

    ctx.lineWidth = 5;

    ctx.moveTo(500, 400);

    ctx.lineTo(600, 500);

    ctx.stroke();

    console.log(canvas);


const canvascontainer = document.getElementById("canvascontainer");

canvas.addEventListener("load", function () {
    ctx.drawImage(canvas, 600, 500);

})();