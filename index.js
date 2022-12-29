var firstDice = throwDice();
changeDice(firstDice, 0); // "0" to change the first dice, "1" to change the second

var secondDice = throwDice();
changeDice(secondDice, 1);

pickWinner(firstDice, secondDice);

function changeDice (number, dice) {
    var randomImgSrc = "images/dice" + number + ".png";
    document.querySelectorAll("img")[dice].setAttribute("src", randomImgSrc);
}

function throwDice() {
    var number = Math.random();
    number = Math.floor((number * 6) + 1);
    
    return number;
}

function pickWinner(firstDice, secondDice) {
    if (firstDice > secondDice) {
        document.querySelector("h1").innerText = "Player 1 wins!";
    } else if (firstDice < secondDice) {
        document.querySelector("h1").innerText = "Player 2 wins!";
    } else {
        document.querySelector("h1").innerText = "Draw!";
    }
}