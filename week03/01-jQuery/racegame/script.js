console.log($);

//var board = document.getElementById("board");
var board = $("#board");

//var racers = document.getElementsByClassName("racer");
var racers = $(".racer");

var racersLeft = [0, 0, 0, 0];

function getRandomNumber(num) {
    return Math.floor(Math.random() * num);
}

/*document.addEventListener("click", function () {
    for (var i = 0; i < racersLeft.length; i++) {
        racersLeft[i] += getRandomNumber(21);
        racers[i].style.left = racersLeft[i] + "px";
    }
});*/

$(document).on("click", function () {
    for (var i = 0; i < racersLeft.length; i++) {
        racersLeft[i] += getRandomNumber(21);

        // important: eq will give you a *jquery* reference to the element at that index
        racers.eq(i).css({
            left: racersLeft[i] + "px",
        });
    }
});

/*document.getElementById("boost-button").addEventListener("click", function (e) {
    console.log("clicked on button!");
    e.stopPropagation();
    racersLeft[0] += 20;
    racers[0].style.left = racersLeft[0] + "px";
});*/

$("#boost-button").on("click", function cb(e) {
    console.log("clicked on button!");
    e.stopPropagation();
    racersLeft[0] += 20;

    racers.eq(0).css({
        left: racersLeft[0] + "px",
    });

    // $(e.target).fadeOut();

    // removes click event listener after first click.
    // so now it's a one-time boost button (but still visible)
    $(e.target).off("click", cb);
});

$(document).on("keydown", function (evt) {
    console.log(evt);
    if (evt.key === "r") {
        var r = getRandomNumber(256);
        var g = getRandomNumber(256);
        var b = getRandomNumber(256);
        var randomColor = "rgb(" + r + "," + g + "," + b + ")";
        console.log(randomColor);

        // TypeError: Cannot set property 'backgroundColor' of undefined.
        // Because board is a jQuery reference now.
        // board.style.backgroundColor = randomColor;
        board.css({
            backgroundColor: randomColor,
        });
    }
});
