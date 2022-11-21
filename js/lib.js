function win() {
    //row 1H
    if (box1 == 1 && box2 == 1 && box3 == 1) {
        alert("cross won")
    }
    else if (box1 == 2 && box2 == 2 && box3 == 2) {
        alert("circle won")
    }

    //row 2H
    else if (box4 == 1 && box5 == 1 && box6 == 1) {
        alert("cross won")
    }
    else if (box4 == 2 && box5 == 2 && box6 == 2) {
        alert("circle won")
    }

    //row 3H
    else if (box7 == 1 && box8 == 1 && box9 == 1) {
        alert("cross won")
    }
    else if (box7 == 2 && box8 == 2 && box9 == 2) {
        alert("circle won")
    }

    //row 1V
    else if (box1 == 1 && box4 == 1 && box7 == 1) {
        alert("cross won")
    }
    else if (box1 == 2 && box4 == 2 && box7 == 2) {
        alert("circle won")
    }

    //row 2V
    else if (box2 == 1 && box5 == 1 && box8 == 1) {
        alert("cross won")
    }
    else if (box2 == 2 && box5 == 2 && box8 == 2) {
        alert("circle won")
    }

    //row 3V
    else if (box3 == 1 && box6 == 1 && box9 == 1) {
        alert("cross won")
    }
    else if (box3 == 2 && box6 == 2 && box9 == 2) {
        alert("circle won")
    }


    //row 1D
    else if (box1 == 1 && box5 == 1 && box9 == 1) {
        alert("cross won")
    }
    else if (box1 == 2 && box5 == 2 && box9 == 2) {
        alert("circle won")
    }

    //row 1D
    else if (box3 == 1 && box5 == 1 && box7 == 1) {
        alert("cross won")
    }
    else if (box3 == 2 && box5 == 2 && box7 == 2) {
        alert("circle won")
    }
}




function button1() {
    if (box1 == 0) { 
        if (playerTurn == 1) {
        myBtn1.innerHTML = '<img src="/img/cross.png" alt="cross" class="cross"></img>';
        playerTurn = 2;
        box1 = 1
        }
        else if (playerTurn == 2) {
        myBtn1.innerHTML = '<img src="/img/cirlce.png" alt="circle" class="circle">';
        playerTurn = 1;
        box1 = 2
        }
    }
    win()
}

function button2() {
    if (box2 == 0) {
        if (playerTurn == 1) {
        myBtn2.innerHTML = '<img src="/img/cross.png" alt="cross" class="cross"></img>';
        playerTurn = 2;
        box2 = 1
        }
        else if (playerTurn == 2) {
        myBtn2.innerHTML = '<img src="/img/cirlce.png" alt="circle" class="circle">';
        playerTurn = 1;
        box2 = 2
        }
    }
    win()
}

function button3() {
    if (box3 == 0) {
        if (playerTurn == 1) {
        myBtn3.innerHTML = '<img src="/img/cross.png" alt="cross" class="cross"></img>';
        playerTurn = 2;
        box3 = 1
        }
        else if (playerTurn == 2) {
        myBtn3.innerHTML = '<img src="/img/cirlce.png" alt="circle" class="circle">';
        playerTurn = 1;
        box3 = 2
        }
    }
    win()

}

function button4() {
    if (box4 == 0) {
        if (playerTurn == 1) {
        myBtn4.innerHTML = '<img src="/img/cross.png" alt="cross" class="cross"></img>';
        playerTurn = 2;
        box4 = 1
        }
        else if (playerTurn == 2) {
        myBtn4.innerHTML = '<img src="/img/cirlce.png" alt="circle" class="circle">';
        playerTurn = 1;
        box4 = 2
        }
    }
    win()
}

function button5() {
    if (box5 == 0) {
        if (playerTurn == 1) {
        myBtn5.innerHTML = '<img src="/img/cross.png" alt="cross" class="cross"></img>';
        playerTurn = 2;
        box5 = 1
        }
        else if (playerTurn == 2) {
        myBtn5.innerHTML = '<img src="/img/cirlce.png" alt="circle" class="circle">';
        playerTurn = 1;
        box5 = 2
        }
    }
    win()
}

function button6() {
    if (box6 == 0) {
        if (playerTurn == 1) {
        myBtn6.innerHTML = '<img src="/img/cross.png" alt="cross" class="cross"></img>';
        playerTurn = 2;
        box6 = 1
        }
        else if (playerTurn == 2) {
        myBtn6.innerHTML = '<img src="/img/cirlce.png" alt="circle" class="circle">';
        playerTurn = 1;
        box6 = 2
        }
    }
    win()
}

function button7() {
    if (box7 == 0) {
        if (playerTurn == 1) {
        myBtn7.innerHTML = '<img src="/img/cross.png" alt="cross" class="cross"></img>';
        playerTurn = 2;
        box7 = 1
        }
        else if (playerTurn == 2) {
        myBtn7.innerHTML = '<img src="/img/cirlce.png" alt="circle" class="circle">';
        playerTurn = 1;
        box7 = 2
        }
    }
    win()
}

function button8() {
    if (box8 == 0) {
        if (playerTurn == 1) {
        myBtn8.innerHTML = '<img src="/img/cross.png" alt="cross" class="cross"></img>';
        playerTurn = 2;
        box8 = 1
        }
        else if (playerTurn == 2) {
        myBtn8.innerHTML = '<img src="/img/cirlce.png" alt="circle" class="circle">';
        playerTurn = 1;
        box8 = 2
        }
    }
    win()
}

function button9() {
    if (box9 == 0) {
        if (playerTurn == 1) {
        myBtn9.innerHTML = '<img src="/img/cross.png" alt="cross" class="cross"></img>';
        playerTurn = 2;
        box9 = 1
        }
        else if (playerTurn == 2) {
        myBtn9.innerHTML = '<img src="/img/cirlce.png" alt="circle" class="circle">';
        playerTurn = 1;
        box9 = 2
        }
    }
    win()
}