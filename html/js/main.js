
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

// IMAGE SCROLL FEATURE

const track = document.getElementById("img-track")

window.onmousedown = e => track.dataset.mouseDownAt = e.clientX

window.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
}

window.onmousemove = e => {
    if(track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth / 2;
          
    const percentage = (mouseDelta / maxDelta) * -100,
          nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage,
          nextPercentageLimit = Math.max(Math.min(nextPercentage, 40), -40)


    track.dataset.percentage = nextPercentageLimit;

    // track.style.transform = `translate(${nextPercentageLimit}%)`;
    track.animate({
        transform: `translate(${nextPercentageLimit}%, -0%)`
      }, { duration: 1200, fill: "forwards" });

    for( const image of track.getElementsByClassName('img-slider')) {
        image.animate({
            objectPosition: `${50 + nextPercentageLimit}% 50%`
        }, { duration: 1200, fill: "forwards"});
    }

}


