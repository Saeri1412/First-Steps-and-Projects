document.querySelector(".menu").addEventListener("click", function () {
    document.querySelector(".overlay").classList.add("on");
});

document.querySelector(".side-nav").addEventListener("click", function (e) {
    e.stopPropagation();
});

document.querySelector(".close").addEventListener("click", function () {
    document.querySelector(".overlay").classList.remove("on");
});

document.querySelector(".overlay").addEventListener("click", function () {
    document.querySelector(".overlay").classList.remove("on");
});
