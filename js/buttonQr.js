import generateQr from "./qr-code.js"

export default function createQr () {
    const buttonQr = document.querySelector('.qr-code-button')
    buttonQr.addEventListener('click',() => {
        const firstStep = document.querySelector(".firstStep")
        const secondStep = document.querySelector(".generated-qr-container")
        firstStep.classList.add('hidden')
        secondStep.classList.remove('hidden')
      
        generateQr()
    })
}