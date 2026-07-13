// world constant
var deg = Math.PI / 180;

function player(x, y, z, rx, ry) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.rx = rx;
    this.ry = ry;
}

var mapArray = new Array();
var coinsArray = new Array();
var keysArray = new Array();
var finishArray = new Array();
var startArray = new Array();

var map = new Array();
var coins = new Array();
var keys = new Array();
var finish = new Array();
var start = new Array();

startArray[0] = [[-900, 0, -900, 0, -100]];

coinsArray[0] = [
    [550, 39, -550, 40, 20, 40, 50, 50, "Patterns/lemon.png", 50],
    [-850, 30, 925, 20, 70, 30, 50, 50, "Patterns/lemon.png", 50],
    [-400, 30, -475, 40, 0, 40, 50, 50, "Patterns/lemon.png", 50]
];

keysArray[0] = [
    [900, 30, 900, 0, 0, 0, 50, 50, "Patterns/apple.png", 50]
];

finishArray[0] = [
    [-380, 0, -920, 0, 90, 0, 180, 180, "Patterns/portal.gif"]
];

// rectangle Array [x,y,z,rx,ry,rz,w,h,colour]

// === FIRST LEVEL ===
mapArray[0] = [
    [0, 0, -1000, 0, 0, 0, 2000, 200, "Patterns/angelitos.jpg"],
    [0, 0, 1000, 0, 180, 0, 2000, 200, "Patterns/angelitos.jpg"],
    [1000, 0, 0, 0, -90, 0, 2000, 200, "Patterns/angelitos.jpg"],
    [-1000, 0, 0, 0, 90, 0, 2000, 200, "Patterns/angelitos.jpg"],
    [0, 100, 0, 90, 0, 0, 2000, 2000, "Patterns/marCza.jpg"],

    [-380, 0, -920, 0, 90, 0, 180, 180, "Patterns/door.png"],

    // wall 1
    [-550, 0, 850, 0, 0, 0, 900, 200, "Patterns/medieval2.jpg"],
    [-550, 0, 810, 0, 0, 0, 900, 200, "Patterns/medieval2.jpg"],
    [-100, 0, 830, 0, 90, 0, 40, 200, "Patterns/medieval2.jpg"],
    [-550, -100, 830, 90, 0, 90, 40, 900, "Patterns/medieval2.jpg"],
    [-550, 100, 830, 90, 0, 90, 40, 900, "Patterns/medieval2.jpg"],

    // wall 2
    [800, 0, 845, 0, 90, 0, 300, 200, "Patterns/roses.jpg"],
    [760, 0, 845, 0, 90, 0, 300, 200, "Patterns/roses.jpg"],
    [780, 0, 695, 0, 0, 0, 40, 200, "Patterns/roses.jpg"],
    [780, -100, 845, 90, 0, 0, 40, 300, "Patterns/roses.jpg"],
    [780, 100, 845, 90, 0, 0, 40, 300, "Patterns/roses.jpg"],

    // wall 3
    [50, 0, 800, 0, 90, 0, 400, 200, "Patterns/rece.jpg"],
    [10, 0, 800, 0, 90, 0, 400, 200, "Patterns/rece.jpg"],
    [30, 0, 600, 0, 0, 0, 40, 200, "Patterns/rece.jpg"],
    [30, -100, 800, 90, 0, 0, 40, 400, "Patterns/rece.jpg"],
    [30, 100, 800, 90, 0, 0, 40, 400, "Patterns/rece.jpg"],

    // wall 4
    [425, 0, 500, 0, 0, 0, 1150, 200, "Patterns/background2.jpg"],
    [425, 0, 460, 0, 0, 0, 1150, 200, "Patterns/background2.jpg"],
    [-150, 0, 480, 0, 90, 0, 40, 200, "Patterns/background2.jpg"],
    [425, -100, 480, 90, 0, 90, 40, 1150, "Patterns/background2.jpg"],
    [425, 100, 480, 90, 0, 90, 40, 1150, "Patterns/background2.jpg"],

    // wall 5
    [440, 0, 620, 0, 90, 0, 300, 200, "Patterns/medieval2.jpg"],
    [400, 0, 620, 0, 90, 0, 300, 200, "Patterns/medieval2.jpg"],
    [420, 0, 770, 0, 0, 0, 40, 200, "Patterns/medieval2.jpg"],
    [425, 0, 490, 0, 0, 0, 40, 200, "Patterns/medieval2.jpg"],
    [420, -100, 620, 90, 0, 0, 40, 300, "Patterns/medieval2.jpg"],
    [420, 100, 620, 90, 0, 0, 40, 300, "Patterns/medieval2.jpg"],

    // wall 6
    [600, 0, 300, 0, 90, 0, 400, 200, "Patterns/medieval.jpg"],
    [560, 0, 300, 0, 90, 0, 400, 200, "Patterns/medieval.jpg"],
    [580, 0, 100, 0, 0, 0, 40, 200, "Patterns/medieval.jpg"],
    [580, -100, 300, 90, 0, 0, 40, 400, "Patterns/medieval.jpg"],
    [580, 100, 300, 90, 0, 0, 40, 400, "Patterns/medieval.jpg"],

    // wall 7
    [-400, 0, 200, 0, 90, 0, 800, 200, "Patterns/angelitos.jpg"],
    [-440, 0, 200, 0, 90, 0, 800, 200, "Patterns/angelitos.jpg"],
    [-420, 0, 600, 0, 0, 0, 40, 200, "Patterns/angelitos.jpg"],
    [-420, 0, -200, 0, 0, 0, 40, 200, "Patterns/angelitos.jpg"],
    [-420, -100, 200, 90, 0, 0, 40, 800, "Patterns/angelitos.jpg"],
    [-420, 100, 200, 90, 0, 0, 40, 800, "Patterns/angelitos.jpg"],

    // wall 8
    [-615, 0, 600, 0, 0, 0, 350, 200, "Patterns/ornam.jpg"],
    [-615, 0, 560, 0, 0, 0, 350, 200, "Patterns/ornam.jpg"],
    [-790, 0, 580, 0, 90, 0, 40, 200, "Patterns/ornam.jpg"],
    [-440, 0, 580, 0, 90, 0, 40, 200, "Patterns/ornam.jpg"],
    [-615, -100, 580, 90, 0, 90, 40, 350, "Patterns/ornam.jpg"],
    [-615, 100, 580, 90, 0, 90, 40, 350, "Patterns/ornam.jpg"],

    // wall 9
    [-10, 0, 200, 0, 0, 0, 800, 200, "Patterns/rece2.jpg"],
    [-10, 0, 160, 0, 0, 0, 800, 200, "Patterns/rece2.jpg"],
    [-410, 0, 180, 0, 90, 0, 40, 200, "Patterns/rece2.jpg"],
    [390, 0, 180, 0, 90, 0, 40, 200, "Patterns/rece2.jpg"],
    [-10, -100, 180, 90, 0, 90, 40, 800, "Patterns/rece2.jpg"],
    [-10, 100, 180, 90, 0, 90, 40, 800, "Patterns/rece2.jpg"],

    // wall 10
    [0, 0, -350, 0, 0, 0, 900, 200, "Patterns/rece.jpg"],
    [0, 0, -390, 0, 0, 0, 900, 200, "Patterns/rece.jpg"],
    [-430, 0, -370, 0, 90, 0, 40, 200, "Patterns/rece.jpg"],
    [430, 0, -370, 0, 90, 0, 40, 200, "Patterns/rece.jpg"],
    [0, -100, -370, 90, 0, 90, 40, 900, "Patterns/rece.jpg"],
    [0, 100, -370, 90, 0, 90, 40, 900, "Patterns/rece.jpg"],

    // wall 11
    [-825, 0, 300, 0, 0, 0, 350, 200, "Patterns/angelitos.jpg"],
    [-825, 0, 260, 0, 0, 0, 350, 200, "Patterns/angelitos.jpg"],
    [-1000, 0, 280, 0, 90, 0, 40, 200, "Patterns/angelitos.jpg"],
    [-650, 0, 280, 0, 90, 0, 40, 200, "Patterns/angelitos.jpg"],
    [-825, -100, 280, 90, 0, 90, 40, 350, "Patterns/angelitos.jpg"],
    [-825, 100, 280, 90, 0, 90, 40, 350, "Patterns/angelitos.jpg"],

    // wall 12
    [-615, 0, -80, 0, 0, 0, 350, 200, "Patterns/rece.jpg"],
    [-615, 0, -40, 0, 0, 0, 350, 200, "Patterns/rece.jpg"],
    [-790, 0, -60, 0, 90, 0, 40, 200, "Patterns/rece.jpg"],
    [-440, 0, -60, 0, 90, 0, 40, 200, "Patterns/rece.jpg"],
    [-615, -100, -60, 90, 0, 90, 40, 350, "Patterns/rece.jpg"],
    [-615, 100, -60, 90, 0, 90, 40, 350, "Patterns/rece.jpg"],

    // wall 13
    [50, 0, -200, 0, 90, 0, 350, 200, "Patterns/roses.jpg"],
    [10, 0, -200, 0, 90, 0, 350, 200, "Patterns/roses.jpg"],
    [30, 0, -25, 0, 0, 0, 40, 200, "Patterns/roses.jpg"],
    [30, 0, -375, 0, 0, 0, 40, 200, "Patterns/roses.jpg"],
    [30, -100, -200, 90, 0, 0, 40, 350, "Patterns/roses.jpg"],
    [30, 100, -200, 90, 0, 0, 40, 350, "Patterns/roses.jpg"],

    // wall 14
    [450, 0, -400, 0, 90, 0, 600, 200, "Patterns/pintura.jpg"],
    [410, 0, -400, 0, 90, 0, 600, 200, "Patterns/pintura.jpg"],
    [430, 0, -100, 0, 0, 0, 40, 200, "Patterns/pintura.jpg"],
    [430, 0, -700, 0, 0, 0, 40, 200, "Patterns/pintura.jpg"],
    [430, -100, -400, 90, 0, 0, 40, 600, "Patterns/pintura.jpg"],
    [430, 100, -400, 90, 0, 0, 40, 600, "Patterns/pintura.jpg"],

    // wall 15
    [-290, 0, -490, 0, 90, 0, 210, 200, "Patterns/rece2.jpg"],
    [-250, 0, -490, 0, 90, 0, 210, 200, "Patterns/rece2.jpg"],
    [-270, 0, -385, 0, 0, 0, 40, 200, "Patterns/rece2.jpg"],
    [-270, 0, -595, 0, 0, 0, 40, 200, "Patterns/rece2.jpg"],
    [-270, -100, -490, 90, 0, 0, 40, 210, "Patterns/rece2.jpg"],
    [-270, 100, -490, 90, 0, 0, 40, 210, "Patterns/rece2.jpg"],

    // wall 16
    [-500, 0, -670, 0, 90, 0, 650, 200, "Patterns/medieval.jpg"],
    [-540, 0, -670, 0, 90, 0, 650, 200, "Patterns/medieval.jpg"],
    [-520, 0, -345, 0, 0, 0, 40, 200, "Patterns/medieval.jpg"],
    [-520, 0, -995, 0, 0, 0, 40, 200, "Patterns/medieval.jpg"],
    [-520, -100, -670, 90, 0, 0, 40, 650, "Patterns/medieval.jpg"],
    [-520, 100, -670, 90, 0, 0, 40, 650, "Patterns/medieval.jpg"],

    // wall 17
    [-150, 0, -845, 0, 0, 0, 700, 200, "Patterns/pintura.jpg"],
    [-150, 0, -805, 0, 0, 0, 700, 200, "Patterns/pintura.jpg"],
    [-500, 0, -825, 0, 90, 0, 40, 200, "Patterns/pintura.jpg"],
    [200, 0, -825, 0, 90, 0, 40, 200, "Patterns/pintura.jpg"],
    [-150, -100, -825, 90, 0, 90, 40, 700, "Patterns/pintura.jpg"],
    [-150, 100, -825, 90, 0, 90, 40, 700, "Patterns/pintura.jpg"],

    // wall 18
    [800, 0, -400, 0, 0, 0, 400, 200, "Patterns/angelitos.jpg"],
    [800, 0, -440, 0, 0, 0, 400, 200, "Patterns/angelitos.jpg"],
    [600, 0, -420, 0, 90, 0, 40, 200, "Patterns/angelitos.jpg"],
    [1000, 0, -420, 0, 90, 0, 40, 200, "Patterns/angelitos.jpg"],
    [800, -100, -420, 90, 0, 90, 40, 400, "Patterns/angelitos.jpg"],
    [800, 100, -420, 90, 0, 90, 40, 400, "Patterns/angelitos.jpg"],

    // wall 19
    [610, 0, -100, 0, 0, 0, 400, 200, "Patterns/rece.jpg"],
    [610, 0, -140, 0, 0, 0, 400, 200, "Patterns/rece.jpg"],
    [410, 0, -120, 0, 90, 0, 40, 200, "Patterns/rece.jpg"],
    [810, 0, -120, 0, 90, 0, 40, 200, "Patterns/rece.jpg"],
    [610, -100, -120, 90, 0, 90, 40, 400, "Patterns/rece.jpg"],
    [610, 100, -120, 90, 0, 90, 40, 400, "Patterns/rece.jpg"],

    /* wall 20
    [200, 0, -902, 0, 90, 0, 195, 200, "Patterns/ornam.jpg"],
    [160, 0, -902, 0, 90, 0, 195, 200, "Patterns/ornam.jpg"],
    [180, 0, -999.5, 0, 0, 0, 40, 200, "Patterns/portug2.jpg"],
    [180, -100, -902, 90, 0, 0, 40, 195, "Patterns/portug2.jpg"],
    [180, 100, -902, 90, 0, 0, 40, 195, "Patterns/portug2.jpg"],*/

    // wall 21
    [625, 0, -700, 0, 0, 0, 350, 200, "Patterns/rece2.jpg"],
    [625, 0, -660, 0, 0, 0, 350, 200, "Patterns/rece2.jpg"],
    [450, 0, -680, 0, 90, 0, 40, 200, "Patterns/rece2.jpg"],
    [800, 0, -680, 0, 90, 0, 40, 200, "Patterns/rece2.jpg"],
    [625, -100, -680, 90, 0, 90, 40, 350, "Patterns/rece2.jpg"],
    [625, 100, -680, 90, 0, 90, 40, 350, "Patterns/rece2.jpg"],

    // wall 22
    [-50, 0, -710, 0, 90, 0, 200, 200, "Patterns/medieval2.jpg"],
    [-10, 0, -710, 0, 90, 0, 200, 200, "Patterns/medieval2.jpg"],
    [-30, 0, -610, 0, 0, 0, 40, 200, "Patterns/medieval2.jpg"],
    [-30, 0, -810, 0, 0, 0, 40, 200, "Patterns/medieval2.jpg"],
    [-30, -100, -710, 90, 0, 0, 40, 200, "Patterns/medieval2.jpg"],
    [-30, 100, -710, 90, 0, 0, 40, 200, "Patterns/medieval2.jpg"],

    // PNG decoration
    [-125, 100, -550, -90, 0, 90, 80, 80, "Patterns/pizza.png"]
];

// === SECOND LEVEL ===
mapArray[1] = [];
startArray[1] = [[-900, 0, -900, 0, -100]];
coinsArray[1] = [];
keysArray[1] = [];
finishArray[1] = [];

// variables for movement
var PressLeft = 0;
var PressRight = 0;
var PressForward = 0;
var PressBack = 0;
var PressUp = 0;
var MouseX = 0;
var MouseY = 0;
var lock = false;
var canlock = false;
var PressDown = 0;
var godMode = false;

// physics helpers
var dx = 0;
var dy = 0;
var dz = 0;
var drx = 0;
var dry = 0;

// PRAWDZIWY SKOK
var vy = 0;
var gravity = 0.7;
var jumpForce = -12;
var isOnGround = true;
var jumpQueued = false;

// link variable to container
var container = document.getElementById("container");

// if the mouse is pressed
container.onclick = function () {
    if (canlock) {
        container.requestPointerLock();
    }
};

// if the key is pressed
document.addEventListener("keydown", function (event) {
    if (event.key == "w" || event.key == "ArrowUp") PressForward = 1;
    if (event.key == "s" || event.key == "ArrowDown") PressBack = 1;
    if (event.key == "d" || event.key == "ArrowRight") PressRight = 1;
    if (event.key == "a" || event.key == "ArrowLeft") PressLeft = 1;

    if (event.key == " ") {
        PressUp = 1;
        if (!event.repeat && !godMode) {
            jumpQueued = true;
        }
    }

    if (event.key == "Shift") {
        PressDown = 1;
    }

    if ((event.key == "g" || event.key == "G") && !event.repeat) {
        godMode = !godMode;

        // wyzeruj fizykę po przełączeniu
        vy = 0;
        jumpQueued = false;

        if (godMode) {
            isOnGround = false;
            console.log("GODMODE ON");
        } else {
            console.log("GODMODE OFF");
        }
    }
});

document.addEventListener("keyup", function (event) {
    if (event.key == "w" || event.key == "ArrowUp") PressForward = 0;
    if (event.key == "s" || event.key == "ArrowDown") PressBack = 0;
    if (event.key == "d" || event.key == "ArrowRight") PressRight = 0;
    if (event.key == "a" || event.key == "ArrowLeft") PressLeft = 0;
    if (event.key == " ") PressUp = 0;
    if (event.key == "Shift") PressDown = 0;
});

// locked mouse listener
document.addEventListener("pointerlockchange", function () {
    lock = (document.pointerLockElement === container);
});

// mouse movement listener
document.addEventListener("mousemove", function (event) {
    if (lock) {
        MouseX = event.movementX;
        MouseY = event.movementY;
    }
});

var pawn = new player(0, 0, 0, 0, 0);
var world = document.getElementById("world");

function update() {
    let speed = 5;
    let flySpeed = 5;

    dx =
        (Math.cos(pawn.ry * deg) * (PressRight - PressLeft) -
            Math.sin(pawn.ry * deg) * (PressForward - PressBack)) * speed;

    dz =
        (-Math.sin(pawn.ry * deg) * (PressRight - PressLeft) -
            Math.cos(pawn.ry * deg) * (PressForward - PressBack)) * speed;

    if (godMode) {
        // w godmode: SPACE w górę, SHIFT w dół
        dy = (-PressUp + PressDown) * flySpeed;
        vy = 0;
        jumpQueued = false;
    } else {
        // normalny skok
        if (jumpQueued && isOnGround) {
            vy = jumpForce;
            isOnGround = false;
            jumpQueued = false;
        }

        vy += gravity;
        dy = vy;
    }

    drx = MouseY * 0.2;
    dry = -MouseX * 0.2;

    MouseX = 0;
    MouseY = 0;

    collision();

    pawn.x = pawn.x + dx;
    pawn.y = pawn.y + dy;
    pawn.z = pawn.z + dz;

    if (!godMode) {
        if (pawn.y > 0) {
            pawn.y = 0;
            vy = 0;
            isOnGround = true;
        }
    }

    if (lock) {
        pawn.rx = pawn.rx + drx;
        pawn.ry = pawn.ry + dry;
    }

    pawn.rx = Math.max(-90, Math.min(90, pawn.rx));

    world.style.transform =
        "translateZ(600px) " +
        "rotateX(" + (-pawn.rx) + "deg) " +
        "rotateY(" + (-pawn.ry) + "deg) " +
        "translate3d(" + (-pawn.x) + "px," + (-pawn.y) + "px," + (-pawn.z) + "px)";
}

function createNewWorld() {
    createSquares(map, "map");
}

function createSquares(squares, string) {
    for (let i = 0; i < squares.length; i++) {
        let newElement = document.createElement("div");
        newElement.className = string + " square";
        newElement.id = string + i;

        newElement.style.width = squares[i][6] + "px";
        newElement.style.height = squares[i][7] + "px";

        let src = squares[i][8];
        newElement.style.backgroundImage = "url(" + src + ")";

        if (typeof src === "string" && src.endsWith(".png")) {
            newElement.style.backgroundRepeat = "no-repeat";
            newElement.style.backgroundSize = "contain";
            newElement.style.backgroundPosition = "center";
        } else {
            newElement.style.backgroundRepeat = "repeat";
            newElement.style.backgroundSize = "auto";
        }

        if (squares[i][9] !== undefined) {
            newElement.style.opacity = squares[i][9];
            newElement.style.borderRadius = squares[i][9] + "%";
        }

        newElement.style.transform =
            "translate3d(" +
            (600 - squares[i][6] / 2 + squares[i][0]) + "px," +
            (400 - squares[i][7] / 2 + squares[i][1]) + "px," +
            squares[i][2] + "px)" +
            "rotateX(" + squares[i][3] + "deg)" +
            "rotateY(" + squares[i][4] + "deg)" +
            "rotateZ(" + squares[i][5] + "deg)";

        world.append(newElement);
    }
}

function collision() {
    for (let i = 0; i < map.length; i++) {
        let x0 = pawn.x - map[i][0];
        let y0 = pawn.y - map[i][1];
        let z0 = pawn.z - map[i][2];

        let x1 = x0 + dx;
        let y1 = y0 + dy;
        let z1 = z0 + dz;

        let point0 = coorTransform(x0, y0, z0, map[i][3], map[i][4], map[i][5]);
        let point1 = coorTransform(x1, y1, z1, map[i][3], map[i][4], map[i][5]);

        if (
            Math.abs(point1[0]) < (map[i][6] + 90) / 2 &&
            Math.abs(point1[1]) < (map[i][7] + 90) / 2 &&
            Math.abs(point1[2]) < 50
        ) {
            point1[2] = Math.sign(point0[2]) * 50;

            let point2 = coorReTransform(
                point1[0],
                point1[1],
                point1[2],
                map[i][3],
                map[i][4],
                map[i][5]
            );

            dx = point2[0] - x0;
            dy = point2[1] - y0;
            dz = point2[2] - z0;
        }
    }
}

function coorTransform(x0, y0, z0, rxc, ryc, rzc) {
    let y1 = y0 * Math.cos(rxc * deg) + z0 * Math.sin(rxc * deg);
    let z1 = -y0 * Math.sin(rxc * deg) + z0 * Math.cos(rxc * deg);
    let x1 = x0;

    let x2 = x1 * Math.cos(ryc * deg) - z1 * Math.sin(ryc * deg);
    let y2 = y1;
    let z2 = x1 * Math.sin(ryc * deg) + z1 * Math.cos(ryc * deg);

    let x3 = x2 * Math.cos(rzc * deg) + y2 * Math.sin(rzc * deg);
    let y3 = -x2 * Math.sin(rzc * deg) + y2 * Math.cos(rzc * deg);
    let z3 = z2;

    return [x3, y3, z3];
}

function coorReTransform(x3, y3, z3, rxc, ryc, rzc) {
    let x2 = x3 * Math.cos(rzc * deg) - y3 * Math.sin(rzc * deg);
    let y2 = x3 * Math.sin(rzc * deg) + y3 * Math.cos(rzc * deg);
    let z2 = z3;

    let x1 = x2 * Math.cos(ryc * deg) + z2 * Math.sin(ryc * deg);
    let y1 = y2;
    let z1 = -x2 * Math.sin(ryc * deg) + z2 * Math.cos(ryc * deg);

    let x0 = x1;
    let y0 = y1 * Math.cos(rxc * deg) - z1 * Math.sin(rxc * deg);
    let z0 = y1 * Math.sin(rxc * deg) + z1 * Math.cos(rxc * deg);

    return [x0, y0, z0];
}