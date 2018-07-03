

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

var playerTurn = function(event) {
    if (turnCounter % 2 == 0) {
        if (event.target.style.backgroundColor == "white") {return}
        playerMsg.innerText="PLAYER 1 - Your Turn" 
        event.target.style.backgroundColor="pink"
        event.target.style.backgroundImage="url(StickerO.webp)"
        turnCounter = turnCounter + 1
    }
    else {
        if (event.target.style.backgroundColor == "white") {return}
        playerMsg.innerText="PLAYER 2 - Your Turn"
        event.target.style.backgroundColor="blue"
        event.target.style.backgroundImage="url(StickerX.webp)"
        turnCounter = turnCounter + 1
    }
}

//var checkWin = function() {
 //   if (b1Btn.style.backgroundColor=="blue" && b2Btn.style.backgroundColor=="blue" && b3Btn.style.backgroundColor=="blue")


gameboard.addEventListener('click',playerTurn)