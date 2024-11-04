let input = document.getElementById("name");
let inputBtn = document.querySelector(".btnWrapper");
let getData = localStorage.getItem("name");
let ruleBtn = document.querySelector(".rules")
let main = document.querySelector(".main")
let rulesWindow = document.querySelector("#popUp")



// -------------------- localstorage-----------------------
inputBtn.addEventListener("click", () => { 
    localStorage.setItem("name", input.value);
    console.log(input.value);
    input.value= ""
})

ruleBtn.addEventListener("click", () => { 
    rulesWindow.classList.toggle("rulesPopUp");
    main.classList.toggle("mainBlur");
    rulesWindow.classList.remove("hidePopUp");
    
})

document.addEventListener("DOMContentLoaded", () => { 
    rulesWindow.classList.add("hidePopUp");
})