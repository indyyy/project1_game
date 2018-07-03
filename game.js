

var b1Btn=document.querySelector("#b1Box")
var b2Btn=document.querySelector("#b2Box")
var b3Btn=document.querySelector("#b3Box")
var b4Btn=document.querySelector("#b4Box")
var b5Btn=document.querySelector("#b5Box")
var b6Btn=document.querySelector("#b6Box")
var b7Btn=document.querySelector("#b7Box")
var b8Btn=document.querySelector("#b8Box")
var b9Btn=document.querySelector("#b9Box")

var turnCounter = 1
var playerMsg = document.querySelector("body h1")

var gameboard=document.querySelector(".gameboard")

var winFlag = false
var playerColor 

var playerTurn = function(event) {
    if (turnCounter % 2 == 0) {
        if (event.target.style.backgroundImage != "") {return}
        playerMsg.innerText="PLAYER 1 - Your Turn" 
        event.target.style.backgroundColor="pink"
        event.target.style.backgroundImage="url(StickerO.webp)"
        checkWin("pink")
        turnCounter = turnCounter + 1
    }
    else {
        if (event.target.style.backgroundImage != "") {return}
        playerMsg.innerText="PLAYER 2 - Your Turn"
        event.target.style.backgroundColor="blue"
        event.target.style.backgroundImage="url(StickerX.webp)"
        checkWin("blue")
        turnCounter = turnCounter + 1
    }
}

var checkWin = function (playerColor) {
    
    checkRow(playerColor)
    checkCol(playerColor)
    checkDiag(playerColor)
}

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


        var checkCol = function (playerColor) {
            if (b1Btn.style.backgroundColor===playerColor && b1Btn.style.backgroundColor===b4Btn.style.backgroundColor && b4Btn.style.backgroundColor===b7Btn.style.backgroundColor) 
                {console.log(playerColor + "Left Column Wins")
                return winFlag=true}
            else if (b2Btn.style.backgroundColor===playerColor && b2Btn.style.backgroundColor===b5Btn.style.backgroundColor && b5Btn.style.backgroundColor===b8Btn.style.backgroundColor) 
                {console.log(playerColor + "Middle Column Wins")
                 return winFlag=true}
            else if (b3Btn.style.backgroundColor===playerColor && b3Btn.style.backgroundColor===b6Btn.style.backgroundColor && b6Btn.style.backgroundColor===b9Btn.style.backgroundColor) 
                 {console.log(playerColor + "Right Column Wins")
                  return winFlag=true}
            else {winFlag=false}

        }



        var checkDiag = function (playerColor) {
            if (b1Btn.style.backgroundColor===playerColor && b1Btn.style.backgroundColor===b5Btn.style.backgroundColor && b5Btn.style.backgroundColor===b9Btn.style.backgroundColor) 
                {console.log(playerColor + "Right Diagonal Wins")
                return winFlag=true}
            else if (b3Btn.style.backgroundColor===playerColor && b3Btn.style.backgroundColor===b5Btn.style.backgroundColor && b5Btn.style.backgroundColor===b7Btn.style.backgroundColor) 
                {console.log(playerColor + "Left Diagonal Wins")
                 return winFlag=true}
            else {winFlag=false}

        }

        







gameboard.addEventListener('click',playerTurn)