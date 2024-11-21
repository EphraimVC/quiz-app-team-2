let input = document.getElementById("name");
let inputBtn = document.querySelector(".btnWrapper");
let getData = localStorage.getItem("name");
let ruleBtn = document.querySelector(".rules")
let main = document.querySelector(".main")
let rulesWindow = document.querySelector("#popContainer")
let closePop = document.querySelector(".closePopUp")
let soundBtn = document.querySelector(".speaker")
let lsHiScore = localStorage.getItem("highestScore")
let showHiScore = document.querySelector(".hiScore");


// -------------------- localstorage-----------------------
inputBtn.addEventListener("click", () => { 
    localStorage.setItem("name", input.value);
    console.log(input.value);
    input.value= ""
    window.location.href = '/pages/categories.html'
})


// show highest score on html if exist 
if (lsHiScore === null) {
    showHiScore.innerText = "0"
}
else { 
    showHiScore.innerText = lsHiScore
}
console.log(lsHiScore);
// ------------------popup-------------------------------- 
const togglePopUp = () => {
    rulesWindow.classList.toggle("showPopUp");
    main.classList.toggle("mainBlur");
}
ruleBtn.addEventListener("click", togglePopUp)
closePop.addEventListener("click", togglePopUp)