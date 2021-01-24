console.log("SANITY CHECK", $);

//iife
(function () {
    var currentPlayer = "player-1";

    var slots = $(".slot");

    var resetButton = $(".resetButton");

    var background = $(".background");

    var closePopup = $(".closeModal");

    function switchPlayer() {
        if (currentPlayer === "player-1") {
            currentPlayer = "player-2";
        } else {
            currentPlayer = "player-1";
        }
    }

    // winning diagonals "array of diagonals" approach
    var diags = [
        [3, 8, 13, 18],
        [4, 9, 14, 19, 24],
        [5, 10, 15, 20, 25, 30],
        [11, 16, 21, 26, 31, 36],
        [17, 22, 27, 32, 37],
        [23, 28, 33, 38],
        [39, 32, 25, 18],
        [40, 33, 26, 19, 12],
        [41, 34, 27, 20, 13, 6],
        [35, 28, 21, 14, 7, 0],
        [29, 22, 15, 8, 1],
        [23, 16, 9, 2],
    ];

    //"array of diagonals" approach
    function checkDiagonalVictory() {
        for (var j = 0; j < diags.length; j++) {
            var slotsToCheck = [];
            var diag = diags[j];
            for (var i = 0; i < diag.length; i++) {
                slotsToCheck.push(slots.eq(diag[i]));
            }
            if (checkVictory(slotsToCheck)) {
                return true;
            }
        }
        return false;
    }

    function checkVictory(slots) {
        // we will do some logic here to find victories...
        //console.log(slots);

        var count = 0;

        for (var i = 0; i < slots.length; i++) {
            var slot = $(slots[i]);

            // is slot occupied by currentPlayer?
            if (slot.hasClass(currentPlayer)) {
                count++;
                console.log(count);
                // we found 4 consecutive slots occupied by currentPlayer
                if (count === 4) {
                    return true;
                }
            } else {
                count = 0;
            }
        }

        return false;
    }

    var columns = $(".column");

    columns.on("click", function (e) {
        var col = $(e.currentTarget);

        var slotsInCol = col.children();

        for (var i = slotsInCol.length - 1; i >= 0; i--) {
            var slot = slotsInCol.eq(i);

            // is that slot still free?
            if (!slot.hasClass("player-1") && !slot.hasClass("player-2")) {
                slot.addClass(currentPlayer);
                break; // this will stop the loop after the first free slot
            }
        }

        // we haven't found a free slot in that column,
        // so we just want to ignore that click.
        if (i === -1) {
            return;
        }

        console.log(".row" + i);
        var slotsInRow = $(".row" + i);
        console.log(slotsInRow);

        var victoryInCol = checkVictory(slotsInCol); // victory in column?
        //console.log("victory", victoryInCol, currentPlayer);

        var victoryInRow = checkVictory(slotsInRow); // victory in row?

        // if you take the "array of diagonals" approach
        var victoryInDiag = checkDiagonalVictory();

        // if one of the 2 victory checks above is true,
        // currentPlayer has won the game
        // only show victory message, if there is a victory
        // don't switch player if there is a victory

        if (victoryInCol || victoryInRow || victoryInDiag) {
            console.log("victory", currentPlayer);
            background.addClass("on");
        } else {
            switchPlayer();
        }
    });

    $(document).ready(function () {
        resetButton.click(function () {
            location.reload();
        });
    });

    closePopup.on("click", function () {
        $(background).fadeOut();
        console.log("CLICKED THE X-BUTTON");
    });
})();
