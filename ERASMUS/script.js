//world constant 
var deg = Math.PI/180;

function player(x,y,z,rx,ry){
    this.x = x;
    this.y = y;
    this.z = z;
    this.rx = rx;
    this.ry = ry;
}

//rectangle Array [x,y,z,rx,ry,rz,w,h,color]
var map = [
    [0,0,-1000,0,0,0,2000,200,"Patterns/portug4.jpg"],  // front wall
    [0,0,1000,0,180,0,2000,200,"Patterns/portug5.jpg"], // back wall (obrócona 180)
    [1000,0,0,0,-90,0,2000,200,"Patterns/portug2.jpg",0.5], // right wall
    [-1000,0,0,0,90,0,2000,200,"Patterns/portug3.jpg",0.5], // left wall
    [0,100,0,90,0,0,2000,2000,"Patterns/marCza.jpg"],  // floor
    [0,0,-1000,0,0,0,180,180, "Patterns/door.png"],

    //walls 
    [-550,0,850,0,0,0,900,200, "Patterns/portug2.jpg"],
    [-550,0,810,0,0,0,900,200, "Patterns/portug2.jpg"],
    [-100,0,830,0,90,0,40,200, "Patterns/portug2.jpg"],
    [-550,-100,830,90,0,90,40,900, "Patterns/portug2.jpg"], //sufit 
    [-550,100,830,90,0,90,40,900, "Patterns/portug2.jpg"], //podłoga 

    [800,0,845,0,90,0,300,200, "Patterns/portug3.jpg"],
    [760,0,845,0,90,0,300,200, "Patterns/portug3.jpg"],
    [780,0,695,0,0,0,40,200, "Patterns/portug3.jpg"],
    [780, -100, 845, 90, 0, 0, 40, 300, "Patterns/portug3.jpg"],//sufit 
    [780,100,845,90,0,0,40,300, "Patterns/portug3.jpg"], //podloga

    [50,0,800,0,90,0,400,200, "Patterns/portug4.jpg"],
    [10,0,800,0,90,0,400,200, "Patterns/portug4.jpg"],
    [30,0,600,0,0,0,40,200, "Patterns/portug4.jpg"],
    [30,-100,800,90,0,0,40,400, "Patterns/portug4.jpg"],
    [30,100,800,90,0,0,40,400, "Patterns/portug4.jpg#5538beff"],

    [425,0,500,0,0,0,1150,200, "Patterns/portug.jpg"],
    [425,0,460,0,0,0,1150,200, "Patterns/portug.jpg"],
    [-150,0,480,0,90,0,40,200, "Patterns/portug.jpg"],
    [425, -100, 480, 90, 0, 90, 40, 1150, "Patterns/portug.jpg"], // sufit
    [425, 100, 480, 90, 0, 90, 40, 1150, "Patterns/portug.jpg"], // podłoga

    [440,0,620,0,90,0,300,200, "Patterns/portug3.jpg"],
    [400,0,620,0,90,0,300,200, "Patterns/portug3.jpg"],
    [420, 0, 770, 0, 0, 0, 40, 200, "Patterns/portug3.jpg"],
    [425, 0, 490, 0, 0, 0, 40, 200, "Patterns/portug3.jpg"],
    [420, -100, 620, 90, 0, 0, 40, 300, "Patterns/portug3.jpg"],
    [420, 100, 620, 90, 0, 0, 40, 300, "Patterns/portug3.jpg"],

    [600,0,300,0,90,0,400,200, "Patterns/portug4.jpg"],
    [560,0,300,0,90,0,400,200, "Patterns/portug4.jpg"],
    [580, 0, 100, 0, 0, 0, 40, 200, "Patterns/portug4.jpg"],
    [580, -100, 300, 90, 0, 0, 40, 400, "Patterns/portug4.jpg"],
    [580, 100, 300, 90, 0, 0, 40, 400, "Patterns/portug4.jpg"],

    [-400, 0, 200, 0,90,0, 800,200, "Patterns/portug5.jpg"],
    [-440, 0, 200, 0,90,0, 800,200, "Patterns/portug5.jpg"],
    [-420, 0, 600, 0, 0, 0, 40, 200, "Patterns/portug5.jpg"],
    [-420, 0, -200, 0, 0, 0, 40, 200, "Patterns/portug5.jpg"],
    [-420, -100, 200, 90, 0, 0, 40, 800, "Patterns/portug5.jpg"],
    [-420, 100, 200, 90, 0, 0, 40, 800, "Patterns/portug5.jpg"],


    [-615,0,600,0,0,0,350,200, "Patterns/portug2.jpg"],
    [-615,0,560,0,0,0,350,200, "Patterns/portug2.jpg"],
    [-790, 0, 580, 0, 90, 0, 40, 200, "Patterns/portug2.jpg"],
    [-440, 0, 580, 0, 90, 0, 40, 200, "Patterns/portug2.jpg"],
    [-615, -100, 580, 90, 0, 90, 40, 350, "Patterns/portug2.jpg"],
    [-615, 100, 580, 90, 0, 90, 40, 350, "Patterns/portug2.jpg"],

        [-10, 0, 200, 0, 0, 0, 800, 200, "Patterns/portug.jpg"],
    [-10, 0, 160, 0, 0, 0, 800, 200, "Patterns/portug.jpg"],
    [-410, 0, 180, 0, 90, 0, 40, 200, "Patterns/portug.jpg"],
    [390, 0, 180, 0, 90, 0, 40, 200, "Patterns/portug.jpg"],
    [-10, -100, 180, 90, 0, 90, 40, 800, "Patterns/portug.jpg"],
    [-10, 100, 180, 90, 0, 90, 40, 800, "Patterns/portug.jpg"],

        // DOLNY DŁUGI — poziomy
    [0, 0, -350, 0, 0, 0, 900, 200, "Patterns/portug5.jpg"],
    [0, 0, -390, 0, 0, 0, 900, 200, "Patterns/portug5.jpg"],
    [-430, 0, -370, 0, 90, 0, 40, 200, "Patterns/portug5.jpg"],
    [ 430, 0, -370, 0, 90, 0, 40, 200, "Patterns/portug5.jpg"],
    [0, -100, -370, 90, 0, 90, 40, 900, "Patterns/portug5.jpg"],
    [0,  100, -370, 90, 0, 90, 40, 900, "Patterns/portug5.jpg"],



    [-825,0,300,0,0,0,350,200, "Patterns/portug4.jpg"],
    [-825,0,260,0,0,0,350,200, "Patterns/portug4.jpg"],
    [-1000, 0, 280, 0, 90, 0, 40, 200, "Patterns/portug4.jpg"],
    [-650, 0, 280, 0, 90, 0, 40, 200, "Patterns/portug4.jpg"],
    [-825, -100, 280, 90, 0, 90, 40, 350, "Patterns/portug4.jpg"],
    [-825, 100, 280, 90, 0, 90, 40, 350, "Patterns/portug4.jpg"],

    [-615,0,-80,0,0,0,350,200, "Patterns/portug2.jpg"],
    [-615,0,-40,0,0,0,350,200, "Patterns/portug2.jpg"],
    [-790, 0, -60, 0, 90, 0, 40, 200, "Patterns/portug2.jpg"],
    [-440, 0, -60, 0, 90, 0, 40, 200, "Patterns/portug2.jpg"],
    [-615, -100, -60, 90, 0, 90, 40, 350, "Patterns/portug2.jpg"],
    [-615, 100, -60, 90, 0, 90, 40, 350, "Patterns/portug2.jpg"],

    [50,0,-200,0,90,0,350,200, "Patterns/portug4.jpg"],
    [10,0,-200,0,90,0,350,200, "Patterns/portug4.jpg"],
    [30, 0, -25, 0, 0, 0, 40, 200, "Patterns/portug4.jpg"],
    [30, 0, -375, 0, 0, 0, 40, 200, "Patterns/portug4.jpg"],
    [30, -100, -200, 90, 0, 0, 40, 350, "Patterns/portug4.jpg"],
    [30, 100, -200, 90, 0, 0, 40, 350, "Patterns/portug4.jpg"],

    [450,0,-400,0,90,0,600,200, "Patterns/portug3.jpg"],
    [410,0,-400,0,90,0,600,200, "Patterns/portug3.jpg"],
    [430, 0, -100, 0, 0, 0, 40, 200, "Patterns/portug3.jpg"],
    [430, 0, -700, 0, 0, 0, 40, 200, "Patterns/portug3.jpg"],
    [430, -100, -400, 90, 0, 0, 40, 600, "Patterns/portug3.jpg"],
    [430, 100, -400, 90, 0, 0, 40, 600, "Patterns/portug3.jpg"],


    [-290,0,-490,0,90,0,210,200, "Patterns/portug5.jpg"],
    [-250,0,-490,0,90,0,210,200, "Patterns/portug5.jpg"],
    [-270, 0, -385, 0, 0, 0, 40, 200, "Patterns/portug5.jpg"],
    [-270, 0, -595, 0, 0, 0, 40, 200, "Patterns/portug5.jpg"],
    [-270, -100, -490, 90, 0, 0, 40, 210, "Patterns/portug5.jpg"],
    [-270, 100, -490, 90, 0, 0, 40, 210, "Patterns/portug5.jpg"],



    [-600,0,-600,0,0,0,700,200, "Patterns/portug2.jpg"],
    [-600,0,-560,0,0,0,700,200, "Patterns/portug2.jpg"],
    [-950, 0, -580, 0, 90, 0, 40, 200, "Patterns/portug2.jpg"],
    [-250, 0, -580, 0, 90, 0, 40, 200, "Patterns/portug2.jpg"],
    [-600, -100, -580, 90, 0, 90, 40, 700, "Patterns/portug2.jpg"],
    [-600, 100, -580, 90, 0, 90, 40, 700, "Patterns/portug2.jpg"],

    [-150,0,-845,0,0,0,700,200, "Patterns/portug.jpg"],
    [-150,0,-805,0,0,0,700,200, "Patterns/portug.jpg"],
    [-500, 0, -825, 0, 90, 0, 40, 200, "Patterns/portug.jpg"],
    [200, 0, -825, 0, 90, 0, 40, 200, "Patterns/portug.jpg"],
    [-150, -100, -825, 90, 0, 90, 40, 700, "Patterns/portug.jpg"],
    [-150, 100, -825, 90, 0, 90, 40, 700, "Patterns/portug.jpg"],

    [800,0,-400,0,0,0,400,200, "Patterns/portug3.jpg"],
    [800,0,-440,0,0,0,400,200, "Patterns/portug3.jpg"],
    [600, 0, -420, 0, 90, 0, 40, 200, "Patterns/portug3.jpg"],
    [1000, 0, -420, 0, 90, 0, 40, 200, "Patterns/portug3.jpg"],
    [800, -100, -420, 90, 0, 90, 40, 400, "Patterns/portug3.jpg"],
    [800, 100, -420, 90, 0, 90, 40, 400, "Patterns/portug3.jpg"],

    [610,0,-100,0,0,0,400,200, "Patterns/portug3.jpg"],
    [610,0,-140,0,0,0,400,200, "Patterns/portug3.jpg"],
    [410, 0, -120, 0, 90, 0, 40, 200, "Patterns/portug3.jpg"],
    [810, 0, -120, 0, 90, 0, 40, 200, "Patterns/portug3.jpg"],
    [610, -100, -120, 90, 0, 90, 40, 400, "Patterns/portug3.jpg"],
    [610, 100, -120, 90, 0, 90, 40, 400, "Patterns/portug3.jpg"],

    [200,0,-902,0,90,0,195,200, "Patterns/portug2.jpg"],
    [160,0,-902,0,90,0,195,200, "Patterns/portug2.jpg"],
    [180, 0, -999.5, 0, 0, 0, 40, 200, "Patterns/portug2.jpg"],
    [180, -100, -902, 90, 0, 0, 40, 195, "Patterns/portug2.jpg"],
    [180, 100, -902, 90, 0, 0, 40, 195, "Patterns/portug2.jpg"],

    [625,0,-700,0,0,0,350,200, "Patterns/portug4.jpg"],
    [625,0,-660,0,0,0,350,200, "Patterns/portug4.jpg"],
    [450, 0, -680, 0, 90, 0, 40, 200, "Patterns/portug4.jpg"],
    [800, 0, -680, 0, 90, 0, 40, 200, "Patterns/portug4.jpg"],
    [625, -100, -680, 90, 0, 90, 40, 350, "Patterns/portug4.jpg"],
    [625, 100, -680, 90, 0, 90, 40, 350, "Patterns/portug4.jpg"],

    [-50,0,-710,0,90,0,200,200, "Patterns/portug.jpg"],
    [-10,0,-710,0,90,0,200,200, "Patterns/portug.jpg"],
    [-30, 0, -610, 0, 0, 0, 40, 200, "Patterns/portug.jpg"],
    [-30, 0, -810, 0, 0, 0, 40, 200, "Patterns/portug.jpg"],
    [-30, -100, -710, 90, 0, 0, 40, 200, "Patterns/portug.jpg"],
    [-30, 100, -710, 90, 0, 0, 40, 200, "Patterns/portug.jpg"],



//PNG DECORATIONS
[-125, 100, -550, -90, 0, 90, 80, 80, "Patterns/pizza.png"]




];

//sterowanie

var PressLeft = 0;
var PressRight = 0;
var PressForward = 0;
var PressBack = 0;
var PressUp = 0;
var MouseX = 0;
var MouseY = 0;
var lock = false;
var canlock = false;
var coins = 
[
[550, 39, -550, 40,20,40,50,50,"Patterns/lemon.png",50 ],
[-850,30,925,20,70,30,50,50,"Patterns/lemon.png",50],
[-400,30,-475,40,0,40,50,50,"Patterns/lemon.png",50],
];


var keys =
[
    [900,30,900,0,0,0,50,50,"Patterns/apple.png",50],
];

//link variable to container 
var container = document.getElementById("container");

//if the mouse is pressed
container.onclick=function()
{
    if(canlock) container.requestPointerLock();
}

//if the key is pressed

document.addEventListener('pointerlockchange', () =>{
    lock = !lock;
})

document.addEventListener("keydown", (event) => 
{
    if (event.key == "w" || event.key == "ArrowUp") PressForward = 1;
    if (event.key == "s" || event.key == "ArrowDown") PressBack = 1;
    if (event.key == "d" || event.key == "ArrowRight") PressRight = 1;
    if (event.key == "a" || event.key == "ArrowLeft") PressLeft = 1;
    if (event.key == " ") PressUp = 1;
    
})

document.addEventListener("keyup", (event) =>{
    if (event.key == "w" || event.key == "ArrowUp") PressForward = 0;
    if (event.key == "s" || event.key == "ArrowDown") PressBack = 0;
    if (event.key == "d" || event.key == "ArrowRight") PressRight = 0;
    if (event.key == "a" || event.key == "ArrowLeft") PressLeft = 0;
    if (event.key == " ") PressUp = 0;
})

document.addEventListener("mousemove", (event) =>{
    MouseX = event.movementX;
    MouseY = event.movementY;
}) 

var pawn = new player(0,0,0,0,0);
var world = document.getElementById("world");

 function update()
 {
    
    //movement input
    let forward = PressForward - PressBack;  // W-S
    let side = PressRight - PressLeft;       // D-A
    let up = PressUp ? 1 : 0;               // SPACE
   

    //camera rotation input
    pawn.rx += MouseY * 0.2;
    pawn.ry -= MouseX * 0.2;
    MouseX = 0;
    MouseY = 0;

    //limit looking up/down
    pawn.rx = Math.max(-90, Math.min(90, pawn.rx));

    //compute direction in world space
    let rad = pawn.ry * Math.PI / 180;
    let sin = Math.sin(rad);
    let cos = Math.cos(rad);

    let speed = 5;

    //forward/back relative to camera angle
    pawn.z -= forward * cos * speed;
    pawn.x -= forward * sin * speed;


    //side movement (strafe)
    pawn.z += side * -sin * speed;
    pawn.x += side * cos * speed;

    //jump / lift
    pawn.y -= up * speed;   
    // Y is inverted because camera flips world

    //prevent falling below ground (at Y = 0)
    if(pawn.y > 0) pawn.y = 0;


    world.style.transform = "translateZ(600px)" + 
        "rotateX(" + (-pawn.rx) + "deg)" +
        "rotateY(" + (-pawn.ry) + "deg)" +
        "translate3d(" + (-pawn.x) +"px," + (-pawn.y) + "px," + (-pawn.z) + "px)";
}

function createNewWorld()
{
   createSquares(map, "map");
}

function createSquares (squares, string)
{
    for (let i = 0; i < squares.length; i++)
    {   
        let newElement = document.createElement("div");
        newElement.className = string +" square";
        newElement.id = string + i;

        newElement.style.width = squares[i][6] + "px";
        newElement.style.height = squares[i][7] + "px";

        let src = squares[i][8];

        if (typeof src === "string" && src.endsWith(".png")) 
        {
            // PNG
            newElement.style.backgroundImage = "url(" + src + ")";
            newElement.style.backgroundRepeat = "no-repeat";
            newElement.style.backgroundSize = "contain";
            newElement.style.backgroundPosition = "center";
        }
        else if (typeof src === "string" && src.endsWith(".jpg")) 
        {
            
            newElement.style.backgroundImage = "url(" + src + ")";
            newElement.style.backgroundRepeat = "repeat";
            newElement.style.backgroundSize = "auto";
        }
        else 
        {
            
            newElement.style.background = src;
        }

        if (squares[i][9] !== undefined) 
        {
            newElement.style.opacity = squares[i][9];
            newElement.style.borderRadius = squares[i][9] + "%";
        }

        newElement.style.transform =
            "translate3d(" +
            (600 - squares[i][6]/2 + squares[i][0]) + "px," +
            (400 - squares[i][7]/2 + squares[i][1]) + "px," +
            squares[i][2] + "px)" +
            "rotateX(" + squares[i][3] + "deg)" +
            "rotateY(" + squares[i][4] + "deg)" +
            "rotateZ(" + squares[i][5] + "deg)";

        world.append(newElement);
    }
}
