let box = [0,0,0,0,0,0,0,0,0];

let box1 = 0;
let box2 = 0;
let box3 = 0;
let box4 = 0;
let box5 = 0;
let box6 = 0;
let box7 = 0;
let box8 = 0;
let box9 = 0;

let playerTurn = 1;
let turn = 0;

const myBtn = [
    document.querySelector(".box1"),
    document.querySelector(".box2"),
    document.querySelector(".box3"),
    document.querySelector(".box4"),
    document.querySelector(".box5"),
    document.querySelector(".box6"),
    document.querySelector(".box7"),
    document.querySelector(".box8"),
    document.querySelector(".box9")
]

const playerWon = document.querySelector(".reset");
const plr1P = document.querySelector(".player-1-points");
const plr2P = document.querySelector(".player-2-points");
const whoWon = document.querySelector(".who-won");
const whoWon2 = document.querySelector(".who-won2");
const playerOneName = document.querySelector(".username-1");
const playertwoName = document.querySelector(".username-2");
const save = document.querySelector(".save");
const restarter = document.querySelector(".restarter");
const playerName = localStorage.getItem("player-name");
const playerNameTwo = localStorage.getItem("player-2-name");
const playerPoints = localStorage.getItem("player-points");
const botPoints = localStorage.getItem("bot-points");




myBtn[0].addEventListener('click', function(){button(0)});
myBtn[1].addEventListener('click', function(){button(1)});
myBtn[2].addEventListener('click', function(){button(2)});
myBtn[3].addEventListener('click', function(){button(3)});
myBtn[4].addEventListener('click', function(){button(4)});
myBtn[5].addEventListener('click', function(){button(5)});
myBtn[6].addEventListener('click', function(){button(6)});
myBtn[7].addEventListener('click', function(){button(7)});
myBtn[8].addEventListener('click', function(){button(8)});
playerWon.addEventListener('click', reset)
restarter.addEventListener('click', restart)
save.addEventListener('click', saveNames)

let playerOnePoints = 0;
plr1P.innerHTML = playerOnePoints;
let playerTwoPoints = 0;
plr2P.innerHTML = playerTwoPoints;

playerOneName.value = "X";
playertwoName.value = "O";
saveNames()
start()