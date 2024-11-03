const linkHtml= document.getElementById("html");
const linkCss= document.getElementById("css");
const linkJs= document.getElementById("js");

linkHtml.addEventListener("click", function(){
    let Kategori= this.id;
    console.log(Kategori);
    localStorage.setItem("Kategori", Kategori)
});

linkCss.addEventListener("click", function(){
    let Kategori= this.id;
    console.log(Kategori);
    localStorage.setItem("Kategori", Kategori)
    
});

linkJs.addEventListener("click", function(){
    let Kategori= this.id;
    console.log(Kategori);
    localStorage.setItem("Kategori", Kategori)

});

