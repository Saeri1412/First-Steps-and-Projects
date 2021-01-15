//console.log("Test");

/*Add an event handler that makes this box center itself directly 
under the user's mouse pointer as it is moved across the screen.*/

var div = document.querySelector("div");

document.addEventListener("mousemove", function (event) {
    //console.log("Follow Mouse");
    //console.log(event.pageX, event.pageY);
    console.log(div.offsetWidth, div.offsetHeight);

    var left = event.pageX - div.offsetWidth / 2;
    var top = event.pageY - div.offsetHeight / 2;

    div.style.left = left + "px";
    div.style.top = top + "px";

    console.log(event.pageX);
});
