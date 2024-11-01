let input = document.getElementById("name");
let inputBtn = document.querySelector(".nameBtn");
let getData = localStorage.getItem("name");


// -------------------- localstorage-----------------------
inputBtn.addEventListener("click", () => { 
    localStorage.setItem("name", input.value);
    console.log(input.value);
})


