// variables for navigation
var menuStartowe = document.getElementById("menuStartowe");
var menuInstructions = document.getElementById("menuInstructions");
var menuRules = document.getElementById("menuRules");

var startGameButton = document.getElementById("startGame");
var instructionsButton = document.getElementById("instructionsButton");
var backButtonInstructions = document.getElementById("backButtonInstructions");

var rulesButton = document.getElementById("rulesButton");
var backButtonRules = document.getElementById("backButtonRules");

var widget1 = document.getElementById("widget1");
var widget2 = document.getElementById("widget2");
var widget3 = document.getElementById("widget3");

var c = [0];
var k = [0];
var score = 0;
var level = 0;
var TimerGame = null;

var clickSound = new Audio();
clickSound.src = "audio/punch.wav";

// var portalSound = new Audio();
// portalSound.src = "sounds/portalsound.mp3";

function repeatForever() {
    update();
    iteration(coins, "coin", c);
    iteration(keys, "key", k);
    finishIteration();
}

// start game
startGameButton.onclick = function () {
    clickSound.play();

    map = makeCopy(mapArray[level]);
    coins = makeCopy(coinsArray[level]);
    keys = makeCopy(keysArray[level]);
    finish = makeCopy(finishArray[level]);
    start = makeCopy(startArray[level]);

    pawn.x = start[0][0];
    pawn.y = start[0][1];
    pawn.z = start[0][2];
    pawn.rx = start[0][3];
    pawn.ry = start[0][4];

    c[0] = 0;
    k[0] = 0;

    menuStartowe.style.display = "none";
    menuInstructions.style.display = "none";
    menuRules.style.display = "none";

    clearWorld();

    // generation of the world
    createNewWorld();
    createSquares(coins, "coin");
    createSquares(keys, "key");

    // widgets
    widget1.style.display = "block";
    widget2.style.display = "block";
    widget3.style.display = "block";

    widget1.innerHTML = "<p style='font-size:30px'>Coins 0 of " + coins.length + "</p>";
    widget2.innerHTML = "<p style='font-size:30px'>Keys 0 of " + keys.length + "</p>";
    widget3.innerHTML = "<p style='font-size:40px'>Please find the key!</p>";

    if (TimerGame !== null) {
        clearInterval(TimerGame);
    }

    TimerGame = setInterval(repeatForever, 10);
    canlock = true;
};

// instructions menu
instructionsButton.onclick = function () {
    clickSound.play();
    menuStartowe.style.display = "none";
    menuInstructions.style.display = "block";
};

// rules menu
rulesButton.onclick = function () {
    clickSound.play();
    menuStartowe.style.display = "none";
    menuRules.style.display = "block";
};

// back from rules
backButtonRules.onclick = function () {
    clickSound.play();
    menuRules.style.display = "none";
    menuStartowe.style.display = "block";
};

// back from instructions
backButtonInstructions.onclick = function () {
    clickSound.play();
    menuInstructions.style.display = "none";
    menuStartowe.style.display = "block";
};

function makeCopy(array) {
    let newArray = new Array();

    for (let i = 0; i < array.length; i++) {
        newArray[i] = new Array();

        for (let j = 0; j < array[i].length; j++) {
            newArray[i][j] = array[i][j];
        }
    }

    return newArray;
}

function iteration(squares, string, num) {
    for (let i = 0; i < squares.length; i++) {
        let r =
            (squares[i][0] - pawn.x) ** 2 +
            (squares[i][1] - pawn.y) ** 2 +
            (squares[i][2] - pawn.z) ** 2;

        let r1 = squares[i][6] ** 2;

        if (r < r1) {
            let element = document.getElementById(string + i);

            if (element) {
                element.style.display = "none";
            }

            squares[i][0] = 1000000;
            squares[i][1] = 1000000;
            squares[i][2] = 1000000;

            num[0]++;

            if (string == "coin") {
                widget1.innerHTML = "<p style='font-size:30px'>Coins " + c[0] + " of " + coins.length + "</p>";
            }

            if (string == "key") {
                widget2.innerHTML = "<p style='font-size:30px'>Keys " + k[0] + " of " + keys.length + "</p>";
                widget3.innerHTML = "<p style='font-size:40px'>Now go to the portal!</p>";
            }

            console.log("item: ", num, "coin: ", c[0], "keys: ", k[0]);
        }
    }
}

function clearWorld() {
    world.innerHTML = "";
}

function finishIteration() {
    //if r != 0 {
    let r =
        (finish[0][0] - pawn.x) ** 2 +
        (finish[0][1] - pawn.y) ** 2 +
        (finish[0][2] - pawn.z) ** 2;

    

    let r1 = finish[0][6] ** 2;

    if (r < r1) {
        if (k[0] == 0) {
            console.log("find key");
            widget3.innerHTML = "<p style='font-size:40px'>Please find the key!</p>";
        } else {
            clearWorld();
            clearInterval(TimerGame);
            TimerGame = null;

            score = score + c[0];
            c[0] = 0;
            k[0] = 0;

            widget1.style.display = "none";
            widget2.style.display = "none";
            widget3.style.display = "none";

            menuStartowe.style.display = "block";
            document.exitPointerLock();

            console.log("score is: ", score);

            // if (portalSound) {
            //     portalSound.play();
            // }

            level++;

            if (level == 2) {
                level = 0;
                score = 0;
            }
        }
    }
}