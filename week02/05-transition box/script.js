var moveIn = document.getElementById("moveIn");
//var moveIn = document.querySelector("#moveIn");

var moveOut = document.getElementById("moveOut");

var box = document.getElementById("box");

moveIn.addEventListener("mousedown", function () {
    box.classList.add("on");
});

moveOut.addEventListener("mousedown", function () {
    box.classList.remove("on");
});
