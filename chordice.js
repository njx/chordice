(function () {
    var rootArray, rootIndex, useFlats;
    
    var noteStringsFlat = [
        "C",
        "D&#9837;",
        "D",
        "E&#9837;"//,
//        "E",
//        "F",
//        "G&#9837;",
//        "G",
//        "A&#9837;",
//        "A",
//        "B&#9837;",
//        "B"
    ];

    var noteStringsSharp = [
        "C",
        "C&#9839;",
        "D",
        "D&#9839;"//,
//        "E",
//        "F",
//        "F&#9839;",
//        "G",
//        "G&#9839;",
//        "A",
//        "A&#9839;",
//        "B"
    ];

    function shuffle(array) {
        var i, j, tmp;
        for (i = array.length - 1; i >= 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            tmp = array[i];
            array[i] = array[j];
            array[j] = tmp;
        }
    }
    
    function displayRootAndAdvance() {
        if (rootIndex >= rootArray.length) {
            restartRoots();
        } else {
            document.querySelector(".annotation").innerHTML = rootIndex + 1;
            document.querySelector(".main-display").innerHTML = (useFlats ? noteStringsFlat : noteStringsSharp)[rootArray[rootIndex++]];
        }
    }

    function restartRoots() {
        rootArray = [];
        for (var i = 0; i < noteStringsFlat.length; i++) {
            rootArray.push(i);
        }
        shuffle(rootArray);
        rootIndex = 0;
        useFlats = true; //(Math.random() > 0.1);
        displayRootAndAdvance();
    }

    function restart() {
        restartRoots();
    }

    document.body.addEventListener("keydown", function (e) {
        if (e.keyCode === 32) {
            displayRootAndAdvance();
        }
    });
    restart();
    setInterval(displayRootAndAdvance, 5000);
}());