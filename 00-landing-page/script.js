console.log("Sanity Check");

var overlay = document.querySelector(".overlay");

var moveIn = document.querySelector("#moveIn");

var moveOut = document.querySelector(".moveOut");

var sideNav = document.querySelector(".side-nav");

moveIn.addEventListener("click", function () {
    overlay.classList.add("on");
    console.log("CLICKED THE MENU");
});

moveOut.addEventListener("click", function () {
    overlay.classList.remove("on");
    console.log("CLICKED THE X-BUTTON");
});

overlay.addEventListener("click", function () {
    overlay.classList.remove("on");
    console.log("Clicked overlay");
});

sideNav.addEventListener("click", function (event) {
    console.log("Clicked");
    event.stopPropagation();
});
