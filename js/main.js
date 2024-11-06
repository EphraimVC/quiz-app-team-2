let input = document.getElementById("name");
let inputBtn = document.querySelector(".btnWrapper");
let getData = localStorage.getItem("name");
let ruleBtn = document.querySelector(".rules")
let main = document.querySelector(".main")
let rulesWindow = document.querySelector("#popContainer")
let closePop = document.querySelector(".closePopUp")

// -------------------- localstorage-----------------------
inputBtn.addEventListener("click", () => { 
    localStorage.setItem("name", input.value);
    console.log(input.value);
    input.value= ""
})

// document.addEventListener("DOMContentLoaded", () => { 
//     rulesWindow.classList.add("hidePopUp");
// })

const togglePopUp = () => {
    rulesWindow.classList.toggle("showPopUp");
    main.classList.toggle("mainBlur");
}

ruleBtn.addEventListener("click", togglePopUp)
closePop.addEventListener("click", togglePopUp)

// document.addEventListener("click", (event) => {
//     if (!rulesWindow.contains(event.target) && event.target !== closePop) {
//         rulesWindow.classList.remove("showPopUp");
//         main.classList.remove("mainBlur");
//     }
// })