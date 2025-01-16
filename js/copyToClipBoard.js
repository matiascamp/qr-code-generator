import showCustomAlert from "./customAlert.js";
import generateQr, { input } from "./qr-code.js"


export default function copyToClipBoard() {
    const buttonCopy = document.querySelector('.share')

    buttonCopy.addEventListener('click', () => {
 
        navigator.clipboard.writeText(input.value)
            .then(() => {
                showCustomAlert("Qr value copied")
                input.value = ""
            })
            .catch((error) => {
                showCustomAlert("Error to copy qr value",error)
            })
    })
}