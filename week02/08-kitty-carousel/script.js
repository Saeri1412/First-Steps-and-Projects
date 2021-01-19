console.log("SANITY CHECK");

// iife
(function () {
    var cats = document.querySelectorAll("#cats img");

    console.log();

    console.log(cats);

    var currentCat = 0;

    function moveCats() {
        console.log("i am going to move the cats...");
        console.log("currentCat: ", currentCat);

        cats[currentCat].classList.remove("onscreen");
        cats[currentCat].classList.add("exit");

        currentCat++;

        if (currentCat >= cats.length) {
            currentCat = 0;
        }

        cats[currentCat].classList.add("onscreen");

        setTimeout(moveCats, 5000); // recursive
    }

    setTimeout(moveCats, 1000);

    document.addEventListener("transitionend", function (e) {
        if (e.target.classList.contains("exit")) {
        } else {
            e.target.classList.remove("exit");
        }

        // 1. check if the target has the "exit" class
        //    (classList.contains might be usefule for that)
        // -> IF no: just do nothing
        // -> IF yes: remove the exit class from the target

        console.log("transition ended!", e.target);
    });
})();
