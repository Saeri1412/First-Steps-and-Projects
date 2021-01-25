console.log("SANITY CHECK");

// iife
(function () {
    var cats = document.querySelectorAll("#cats img");
    var dots = document.querySelectorAll(".dots .dot");

    console.log(dots);

    console.log(cats);

    var currentCat = 0;
    var transitioning = false;
    var timer;

    console.log("ENTERING FOR LOOP...");

    for (var i = 0; dots.length > i; i++) {
        console.log(i);

        /*dots[i].addEventListener("click", function () {
            // this will always log "4",
            // because at the time the user clicks on one of our dots,
            // the for-loop has already counted all the way up.
            console.log("value of i inside event listener", i);
        });*/

        // TODO: if the user clicks on the currently active dot,
        // we see a strange animation. -> ignore clicks on currently active dot
        dots[i].addEventListener(
            "click",
            // "Freezing" current value of i in locale scope.
            // Closure.
            (function (i) {
                return function () {
                    // if there is already a transition running -> do nothing,
                    // if not -> transition to cat at that index i
                    console.log("transitioning", transitioning);

                    if (transitioning) {
                        // do nothing
                    } else if (currentCat[i]) {
                        // do nothing
                    } else {
                        // move to that cat
                        clearTimeout(timer);
                        moveCats(i);
                    }

                    console.log("value of i inside event listener", i);
                };
            })(i) // closing over i -> take i from outer scope and make a copy of it in local scope
        );
    }

    console.log("LEAVING FOR LOOP...");

    function moveCats(index) {
        console.log("i am going to move the cats...");
        console.log("currentCat: ", currentCat);

        transitioning = true;

        cats[currentCat].classList.remove("onscreen");
        cats[currentCat].classList.add("exit");

        dots[currentCat].classList.remove("on");

        currentCat++;

        if (!isNaN(index)) {
            currentCat = index;
        }

        if (currentCat >= cats.length) {
            currentCat = 0;
        }

        cats[currentCat].classList.add("onscreen");
        dots[currentCat].classList.add("on");

        timer = setTimeout(moveCats, 5000); // recursive
    }

    setTimeout(moveCats, 1000);

    document.addEventListener("transitionend", function (e) {
        // 1. check if the target has the "exit" class
        //    (classList.contains might be usefule for that)
        // -> IF no: just do nothing
        // -> IF yes: remove the exit class from the target

        if (e.target.classList.contains("exit")) {
            e.target.classList.remove("exit");

            transitioning = false;
        }

        console.log("transition ended!", e.target);
    });

    document.addEventListener("touchend", function () {
        console.log("I just touched the screen");
        clearTimeout(timer);
        moveCats();
    });

    document.addEventListener("touchmove", function (event) {
        console.log("I swiped to left or right");
        console.log(event.pageX);

        /* if (event.pageX >=  ) {
        clearTimeout(timer);
        moveCats(i++);

        } else {
        clearTimeout(timer);
        moveCats(i--);
        }*/
    });
})();
