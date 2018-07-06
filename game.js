

// Sounds for Player 1, Player 2 and Winner

var splatSoundB = new Audio('zapsplat_cartoon_bounces_fast_chaotic_18269.mp3');
var splatSoundP= new Audio('aaj_0195_FmlScrm3SFX.mp3');
var splatSoundW = new Audio('zapsplat_multimedia_male_voice_processed_says_winner_001_21568.mp3');
// splatSound.play();

//var flush = new Audio('toilet_flush.wav');
//var duration = flush.duration;




// Buttons for each Tic-Tac-Toe Box //
var b1Btn=document.querySelector("#b1Box")
var b2Btn=document.querySelector("#b2Box")
var b3Btn=document.querySelector("#b3Box")
var b4Btn=document.querySelector("#b4Box")
var b5Btn=document.querySelector("#b5Box")
var b6Btn=document.querySelector("#b6Box")
var b7Btn=document.querySelector("#b7Box")
var b8Btn=document.querySelector("#b8Box")
var b9Btn=document.querySelector("#b9Box")

// Counter for Player Turn - if EVEN then Player 1

var turnCounter = 1


var playerMsg = document.querySelector("body h1")

var gameboard=document.querySelector(".gameboard")

var player1ScoreBox = document.querySelectorAll(".scoreboard h2")[0]
var player2ScoreBox = document.querySelectorAll(".scoreboard h2")[1]

var player1ScoreNumMsg = document.querySelectorAll(".scoreNum")[0]
var player2ScoreNumMsg = document.querySelectorAll(".scoreNum")[1]

var player1ScoreNum = 0
var player2ScoreNum = 0

player1ScoreNumMsg.innerText = 0
player2ScoreNumMsg.innerText = 0

// set the X and O images for Player 1 and Player 2
player1ScoreBox.style.backgroundImage="url(StickerX.webp)"
player2ScoreBox.style.backgroundImage="url(StickerO.webp)"

// Button to reset the game 
var resetBtn = document.querySelector("footer button")

// Keep Playing till winFlag is true and there is a Winner

var winFlag = false

// player 1 is blue and player 2 is pink

var playerColor 

// Each player takes a turn until there is a winner - execute CheckWin() to check for Winner
// if player1 clicks on tic-tac-toe box then turn it blue with an "X" GIPHY
// if player2 click on tic-tac-toe box then turn it pink with an "O" GIPHY
// keep increasing the turn counter and checking if Player 1(EVEN) or Player 2(ODD)

var clearBoard = function() {
  //  splatSound.play()
  //   window.location.reload()
  winFlag=false
  playerMsg.innerText="PLAYER 1 - Your Turn" 
  b1Btn.style.backgroundColor="turquoise"
  b2Btn.style.backgroundColor="turquoise"
  b3Btn.style.backgroundColor="turquoise"
  b4Btn.style.backgroundColor="turquoise"
  b5Btn.style.backgroundColor="turquoise"
  b6Btn.style.backgroundColor="turquoise"
  b7Btn.style.backgroundColor="turquoise"
  b8Btn.style.backgroundColor="turquoise"
  b9Btn.style.backgroundColor="turquoise"
  b1Btn.style.backgroundImage=""
  b2Btn.style.backgroundImage=""
  b3Btn.style.backgroundImage=""
  b4Btn.style.backgroundImage=""
  b5Btn.style.backgroundImage=""
  b6Btn.style.backgroundImage=""
  b7Btn.style.backgroundImage=""
  b8Btn.style.backgroundImage=""
  b9Btn.style.backgroundImage=""
}


var playerTurn = function(event) {
    if ( winFlag===false) { 
        if (turnCounter % 2 == 0) {
            if (event.target.style.backgroundImage != "") {return}
                playerMsg.innerText="PLAYER 1 - Your Turn" 
                splatSoundP.play()
                event.target.style.backgroundColor="pink"
                event.target.style.backgroundImage="url(StickerO.webp)"
                checkWin("pink")
            if (winFlag==true) 
                {
                    splatSoundW.play()
                    playerMsg.innerText="YEAHHHH PLAYER 2 WINS"
                    player2ScoreNum = player2ScoreNum + 1
                    player2ScoreNumMsg.innerText = player2ScoreNum 
                return
                }
            turnCounter = turnCounter + 1
        }
        else {
            if (event.target.style.backgroundImage != "") {return}
                playerMsg.innerText="PLAYER 2 - Your Turn"
                splatSoundB.play()
                event.target.style.backgroundColor="blue"
                event.target.style.backgroundImage="url(StickerX.webp)"
                checkWin("blue")
                if (winFlag==true) {
                    splatSoundW.play()
                    playerMsg.innerText="YEAAAHH PLAYER 1 WINS"
                    player1ScoreNum = player1ScoreNum + 1
                    player1ScoreNumMsg.innerText = player1ScoreNum
               return
                }
            turnCounter = turnCounter + 1
        }
    }
}

// Function to check for Winner based on Player1 being blue or Player2 being pink
// Check the diagonals for a winner / Check the rows for a winner / Check the columns for a winner
// Only check if the winFlag is False (there is now winner)

var checkWin = function (playerColor) {
        console.log(winFlag)
        if (winFlag===false) {
            checkDiag(playerColor)
            console.log("Diag" + winFlag)
        }
        if (winFlag===false) {
            checkRow(playerColor)
            console.log("Row" + winFlag)
        }
        if (winFlag===false) {
            checkCol(playerColor)
            console.log("Col" + winFlag)
        }
}

// check the Row for a Winner and if there is a winner then return a true flag that there is a winner
        var checkRow = function (playerColor) {
            if (b1Btn.style.backgroundColor===playerColor && b1Btn.style.backgroundColor===b2Btn.style.backgroundColor && b2Btn.style.backgroundColor===b3Btn.style.backgroundColor) 
                {console.log(playerColor + "Top Row Wins")
                return winFlag=true} 
            else if (b4Btn.style.backgroundColor===playerColor && b4Btn.style.backgroundColor===b5Btn.style.backgroundColor && b5Btn.style.backgroundColor===b6Btn.style.backgroundColor) 
                {console.log(playerColor + "Middle Row Wins")
                 return winFlag=true}
            else if (b7Btn.style.backgroundColor===playerColor && b7Btn.style.backgroundColor===b8Btn.style.backgroundColor && b8Btn.style.backgroundColor===b9Btn.style.backgroundColor) 
                 {console.log(playerColor + "Bottom Row Wins")
                  return winFlag=true}
            else {winFlag=false}

        }

// check the Columns for a Winner and if there is a winner then return a true flag that there is a winner
        var checkCol = function (playerColor) {
            if (b1Btn.style.backgroundColor===playerColor && b1Btn.style.backgroundColor===b4Btn.style.backgroundColor && b4Btn.style.backgroundColor===b7Btn.style.backgroundColor) 
                {console.log(playerColor + "Left Column Wins")
                return winFlag=true
                }
            else if (b2Btn.style.backgroundColor===playerColor && b2Btn.style.backgroundColor===b5Btn.style.backgroundColor && b5Btn.style.backgroundColor===b8Btn.style.backgroundColor) 
                {console.log(playerColor + "Middle Column Wins")
                return winFlag=true
                }
            else if (b3Btn.style.backgroundColor===playerColor && b3Btn.style.backgroundColor===b6Btn.style.backgroundColor && b6Btn.style.backgroundColor===b9Btn.style.backgroundColor) 
                 {console.log(playerColor + "Right Column Wins")
                return winFlag=true}
            else {winFlag=false}

        }


// check the Diagonals for a Winner and if there is a winner then return a true flag that there is a winner

        var checkDiag = function (playerColor) {
            if (b1Btn.style.backgroundColor===playerColor && b1Btn.style.backgroundColor===b5Btn.style.backgroundColor && b5Btn.style.backgroundColor===b9Btn.style.backgroundColor) 
                {console.log(playerColor + "Right Diagonal Wins")
                return winFlag=true}
            else if (b3Btn.style.backgroundColor===playerColor && b3Btn.style.backgroundColor===b5Btn.style.backgroundColor && b5Btn.style.backgroundColor===b7Btn.style.backgroundColor) 
                {console.log(playerColor + "Left Diagonal Wins")
                 return winFlag=true}
            else {winFlag=false}

        }

// listen for a "click" event on the game-board, and then execute the playerTurn function



gameboard.addEventListener('click',playerTurn)
resetBtn.addEventListener('click', clearBoard)
