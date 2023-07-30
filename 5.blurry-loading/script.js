const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30)
let filterBlur = 30
function blurring() {

    load++
    if (load > 99) {
        clearInterval(int)
    }
    filterBlur -= 0.3
    loadText.innerText = `${load}%`
    loadText.style.opacity = 1 - (load / 100)
    bg.style.filter = `blur(${filterBlur}px)`;
}