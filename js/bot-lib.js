function start() {
    playerOnePoints = parseInt(playerPoints);
    playerTwoPoints = parseInt(botPoints);
    playerOneName.value = playerName;
    plr1P.innerHTML = playerOnePoints;
    plr2P.innerHTML = playerTwoPoints;
    saveNames()
}

function crossWon() {
    playerOnePoints++;
    plr1P.innerHTML = playerOnePoints;
    console.log("cross won")
    whoWon.style.visibility = "visible";
    whoWon2.innerHTML = name1 + " won"
    savePoints()
}

function circleWon() {
    playerTwoPoints++;
    plr2P.innerHTML = playerTwoPoints;
    console.log("cirlce won");
    whoWon.style.visibility = "visible";
    whoWon2.innerHTML = " Bot won";
    savePoints()
}

function bot() {
    if (turn < 4) {
        rNum = Math.floor(Math.random() * 8);
        if (!box[rNum] == 0) {
            bot();
        }
        if (box[rNum] == 0) {
            box[rNum] = 2;
            myBtn[rNum].innerHTML = '<img src="/img/circle.png" alt="cirlce" class="circle"></img>'
            console.log("turn " + turn)
        }
    }
}

function win() {
    //row 1H
    if (box[0] == 1 && box[1] == 1 && box[2] == 1) {crossWon()}
    else if (box[0] == 2 && box[1] == 2 && box[2] == 2) {circleWon()}
    //row 2H
    else if (box[3] == 1 && box[4] == 1 && box[5] == 1) {crossWon()}
    else if (box[3] == 2 && box[4] == 2 && box[5] == 2) {circleWon()}
    //row 3H
    else if (box[6] == 1 && box[7] == 1 && box[8] == 1) {crossWon()}
    else if (box[6] == 2 && box[7] == 2 && box[8] == 2) {circleWon()}
    //row 1V
    else if (box[0] == 1 && box[3] == 1 && box[6] == 1) {crossWon()}
    else if (box[0] == 2 && box[3] == 2 && box[6] == 2) {circleWon()}
    //row 2V
    else if (box[1] == 1 && box[4] == 1 && box[7] == 1) {crossWon()}
    else if (box[1] == 2 && box[4] == 2 && box[7] == 2) {circleWon()}
    //row 3V
    else if (box[2] == 1 && box[5] == 1 && box[8] == 1) {crossWon()}
    else if (box[2] == 2 && box[5] == 2 && box[8] == 2) {circleWon()}
    //row 1D
    else if (box[0] == 1 && box[4] == 1 && box[8] == 1) {crossWon()}
    else if (box[0] == 2 && box[4] == 2 && box[8] == 2) {circleWon()}
    //row 2D
    else if (box[2] == 1 && box[4] == 1 && box[6] == 1) {crossWon()}
    else if (box[2] == 2 && box[4] == 2 && box[6] == 2) {circleWon()}
    else if (turn > 4) {
        console.log("tied")
        whoWon.style.visibility = "visible";
        whoWon2.innerHTML = "tie";
        savePoints()
    }
}

function reset() {
    myBtn[0].innerHTML = ' ';
    box[0] = 0;
    myBtn[1].innerHTML = ' ';
    box[1] = 0;
    myBtn[2].innerHTML = ' ';
    box[2] = 0;
    myBtn[3].innerHTML = ' ';
    box[3] = 0;
    myBtn[4].innerHTML = ' ';
    box[4] = 0;
    myBtn[5].innerHTML = ' ';
    box[5] = 0;
    myBtn[6].innerHTML = ' ';
    box[6] = 0;
    myBtn[7].innerHTML = ' ';
    box[7] = 0;
    myBtn[8].innerHTML = ' ';
    box[8] = 0;
    turn = 0;
    whoWon.style.visibility = "hidden";
}

function button(num) { 
    console.log(num)
    if (box[num] == 0) { 
        myBtn[num].innerHTML = '<img src="/img/cross.png" alt="cross" class="cross"></img>';
        box[num] = 1
        bot()
        turn++;
    }
    win()
}

function saveNames() {
    name1 = playerOneName.value;
    console.log(playerOneName.value)
    document.querySelector(".name1").innerHTML = name1;
    localStorage.setItem("player-name", playerOneName.value);//saves the player name
}

function savePoints() {
    localStorage.setItem("player-points", playerOnePoints);//saves player one points
    localStorage.setItem("bot-points", playerTwoPoints);//saves bot points
}

function restart() {
    localStorage.clear()
    playerOnePoints = 0
    playerTwoPoints = 0
    plr1P.innerHTML = playerOnePoints;
    plr2P.innerHTML = playerTwoPoints;
    saveNames()
    savePoints()
}