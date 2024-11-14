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

    muteButton.addEventListener('click', () => {

        //local storage för muted
    })

    //if we are on index.html
    if (window.location.pathname === '/') {
        logoElement.style.visibility = 'hidden';
    }

    

})