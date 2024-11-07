const playAgainBtn = document.querySelector("#playAgainBtn");

let scoreElement = document.querySelector("#score");
let hiscoreElement = document.querySelector("#hiscore");
let recordElement = document.querySelector(".new-record");
let player = document.querySelector(".player")

let score = localStorage.getItem("finalScore");
let hiscore = localStorage.getItem("highestScore");
console.log(hiscore);

playAgainBtn.addEventListener("click", () => {
    localStorage.removeItem("finalScore")
    localStorage.removeItem("name")
   window.location.href = "/index.html"
})

player.innerText = localStorage.getItem("name")
scoreElement.innerText = score

   //beroende på score
if (score >= 10) {
    tsParticles.load("tsparticles", confetti({
        particleCount: 100,
        spread: 360,
        origin: { y: 0.45 }
    }));
}

if (hiscore === null) {
    localStorage.setItem("highestScore", score)
    recordElement.classList.add("show")
}
else if (score > hiscore) {
     localStorage.setItem("highestScore", score)
     recordElement.classList.add("show")
} else {
}
hiscoreElement.innerText = hiscore
console.log(hiscore);


