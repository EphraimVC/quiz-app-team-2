//klass som definerar en custom element

class nkHeader extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        console.log('header component mounted')
        this.innerHTML = `<header class="logo-sound">
        <div  class="logo">
            <img id="header-logo-img" src="../img/logo.svg" alt="Logo with a smiling face wearing sunglasses">
        </div>
        <div id="mute-button">
            <i id="volume-icon" class="bi bi-volume-up-fill"></i>
        </div>
    </header>`
    }
}

window.customElements.define('nk-header', nkHeader);

document.addEventListener('DOMContentLoaded', () => {
    
    const logoElement = document.querySelector('#header-logo-img');
    
    const muteButton = document.getElementById('mute-button');
    const audioElements = document.querySelectorAll('audio');

    const volumeIcon = document.getElementById('volume-icon');

    setVolumeIcon();


    if (localStorage.getItem('muted') === null) {
        localStorage.setItem('muted', "false")
    }
    
    if (localStorage.getItem('muted') === "true") {

    }
    
     
    muteButton.addEventListener('click', () => {
        if (localStorage.getItem('muted') === "false") {
            localStorage.setItem('muted', "true")
            setVolumeIcon();

        } else {
            localStorage.setItem('muted', 'false')
            setVolumeIcon();

        }
        //local storage för muted
    })

    function setVolumeIcon() {
        if (localStorage.getItem('muted') === "true") {
            volumeIcon.classList.remove('bi-volume-up-fill')
            volumeIcon.classList.add('bi-volume-mute-fill')
            audioElements.forEach((audio) => {
                audio.muted = true;
            })
        } else {
            volumeIcon.classList.remove('bi-volume-mute-fill')
            volumeIcon.classList.add('bi-volume-up-fill')

            audioElements.forEach((audio) => {
                audio.muted = false;
            })
        }
    }



    //if we are on index.html
    if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
        logoElement.style.visibility = 'hidden';
    }

    console.log(window.location.pathname)
})


/* 
    global variable
    see if key exists i ls
        gör den inte det, sätt muted till false
        ändra inte variabeln

    om key exists i ls
        ändra variabeln
        
        
    on click, sätt global variabel, och ls



*/