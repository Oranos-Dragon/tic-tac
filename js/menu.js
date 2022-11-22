const hard = document.querySelector(".hard");
const easy = document.querySelector(".easy");
const botB = document.querySelector(".bot-button");

let bots = 1

botB.addEventListener('click', menu)

function menu() {
    if (bots == 1) {
        hard.style.visibility = "visible"
        easy.style.visibility = "visible"
        bots++;
    }
    else if (bots == 2) {
        hard.style.visibility = "hidden"
        easy.style.visibility = "hidden"
        bots--;    
    }
}