console.log("SANITY CHECK", $);

// vanilla javascript
/*var ul = document.querySelector("ul");
var lis = document.querySelectorAll("li");
console.log(ul, lis);
ul.style.margin = "50px";
for (var i = 0; lis.length > i; i++) {
    lis[i].style.color = "blue";
    lis[i].style.fontSize = "38px";
}*/

// same thing using jQuery ($)
var ul = $("ul");
var lis = $("li");

console.log(ul, lis);

ul.css({
    margin: "50px",
});

lis.css({
    color: "blue",
    fontSize: "38px",
});

// adding event listeners with jQuery
lis.on("click", function (e) {
    //$(e.target).fadeOut();
    $(e.target).slideUp();
});
