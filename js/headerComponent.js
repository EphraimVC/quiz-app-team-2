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
        <div class="sound-icon">
            <img  src="../img/lsicon_volume-filled.svg" alt="Sound icon">
        </div>
    </header>`
    }
}

window.customElements.define('nk-header', nkHeader);

document.addEventListener('DOMContentLoaded', () => {
    const logoElement = document.querySelector('#header-logo-img');

    //if we are on index.html
    if (window.location.pathname === '/') {
        logoElement.style.visibility = 'hidden';
    }
})