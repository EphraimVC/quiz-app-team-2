const playAgainBtn = document.querySelector("#playAgainBtn");
let resultText = document.querySelector("#resultText");

let scoreElement = document.querySelector("#score");
let hiscoreElement = document.querySelector("#hiscore");
let recordElement = document.querySelector(".new-record");
let player = document.querySelector(".player")

let score = localStorage.getItem("finalScore");
let hiscore = localStorage.getItem("highestScore");

console.log(score)
console.log(hiscore)

playAgainBtn.addEventListener("click", () => {
    localStorage.removeItem("finalScore")
    localStorage.removeItem("name")
    window.location.href = "/index.html"
})

player.innerText = localStorage.getItem("name")
scoreElement.innerText = score

//beroende på score
   
if (parseInt(score) < 30) {
    resultText.innerText = "Säääämst !!!"
}
else if (parseInt(score) < 70) {
    resultText.innerText = "Snyyyggt Jobbat!!"
}
else { 
    resultText.innerText = "Du är en expert!!"
}


if (parseInt(score) >= 50) {
    tsParticles.load("tsparticles", confetti({
        particleCount: 100,
        spread: 360,
        origin: { y: 0.45 }
    }));
}

if (hiscore === null) {
    localStorage.setItem("highestScore", score)
    recordElement.classList.add("show")
    hiscoreElement.innerText = score
    
} else if (parseInt(score) > parseInt(hiscore)) {
    localStorage.setItem("highestScore", score)
    recordElement.classList.add("show")
    hiscoreElement.innerText = score
} else {
    hiscoreElement.innerText = hiscore
}