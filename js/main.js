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


const myBtn1 = document.querySelector(".box1");
const myBtn2 = document.querySelector(".box2");
const myBtn3 = document.querySelector(".box3");
const myBtn4 = document.querySelector(".box4");
const myBtn5 = document.querySelector(".box5");
const myBtn6 = document.querySelector(".box6");
const myBtn7 = document.querySelector(".box7");
const myBtn8 = document.querySelector(".box8");
const myBtn9 = document.querySelector(".box9");
const playerWon = document.querySelector(".reset");
const plr1P = document.querySelector(".player-1-points");
const plr2P = document.querySelector(".player-2-points");
const whoWon = document.querySelector(".who-won");
const whoWon2 = document.querySelector(".who-won2");
const playerOneName = document.querySelector(".player-one-name");
const playertwoName = document.querySelector(".player-two-name");
const scoreboard = document.querySelector(".score");


myBtn1.addEventListener('click', button1);
myBtn2.addEventListener('click', button2);
myBtn3.addEventListener('click', button3);
myBtn4.addEventListener('click', button4);
myBtn5.addEventListener('click', button5);
myBtn6.addEventListener('click', button6);
myBtn7.addEventListener('click', button7);
myBtn8.addEventListener('click', button8);
myBtn9.addEventListener('click', button9);
playerWon.addEventListener('click', reset)

let playerOnePoints = 0;
plr1P.innerHTML = playerOnePoints;
let playerTwoPoints = 0;
plr2P.innerHTML = playerTwoPoints;

let players = []
