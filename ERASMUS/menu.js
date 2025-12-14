//variables for navigation 
var menuStartowe = document.getElementById("menuStartowe");
var menuInstructions = document.getElementById("menuInstructions");
var startGame = document.getElementById("startGame");
var instructionsButton = document.getElementById("instructionsButton");
var backButtonInstructions = document.getElementById("backButtonInstructions");
var menuRules = document.getElementById("menuRules");
var rulesButton = document.getElementById("rulesButton");
var backButtonRules = document.getElementById("backButtonRules");
var clickSound = new Audio;
clickSound.src ="audio/punch.wav";



//create navigation 
startGame.onclick=function()
{
    clickSound.play();
    menuStartowe.style.display="none";
    //generation of the world
    createNewWorld();
    createSquares (coins,"coin");
    createSquares(keys,"key");
    TimerGame = setInterval(repeatForever, 10);
    canlock = true;
}

instructionsButton.onclick =function()
{
    clickSound.play();
    menuStartowe.style.display = "none";
    menuInstructions.style.display = "block";
}

backButtonInstructions.onclick =function()
{
    clickSound.play();
    menuStartowe.style.display = "block";
    menuInstructions.style.display = "none";
}

backButtonRules.onclick =function()
{
    clickSound.play();
    menuStartowe.style.display = "block";
    menuRules.style.display = "none";
}

rulesButton.onclick =function()
{
    clickSound.play();
    menuStartowe.style.display = "none";
    menuRules.style.display = "block";
}

function iteration(squares,string)
{
    for (let i=0; i <squares.length; i++)
    {
        let r = (squares[i][0] - pawn.x)**2 +
                (squares[i][1] - pawn.y)**2 +
                (squares[i][2] - pawn.z)**2;
        let r1 = squares[i][6]**2;
        console.log(r,r1);
        if (r<r1)
        {
            document.getElementById(string + i).style.display="none";
            squares[i][0]=1000000;
            squares[i][1]=1000000;
            squares[i][2]=1000000;
        }
    }
}

function repeatForever()
{
    update();
    iteration(coins,"coin");
    iteration(keys,"key");

}