
// MAIN BUTTON LINK

function goToLink(link){
    console.log(link.value);
    location.href = '#one';
}

// GLOW EFFECT RX

(function setGlowEffectRx(){
    const glowEffects = document.querySelectorAll('.glow-effect');

    glowEffects.forEach(glowEffect => {
        const glowLines = glowEffect.querySelectorAll('rect');
        const rx = getComputedStyle(glowEffect).borderRadius;

        glowLines.forEach(line =>{
            line.setAttribute('rx', rx);
        })
    })
})();

// NAVBAR DROPDOWN

const toggleButton = document.querySelector('.toggle-button')
const toggleButtonIcon = document.querySelector('.toggle-button i')
const dropDownMenu = document.querySelector('.dropdown-menu')

toggleButton.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleButtonIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

// DROPDOWN CONTINOUS SCROLL




