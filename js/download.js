import { input } from "./qr-code"

export default function download() {
    const downloadButton = document.querySelector('.download')
    

    downloadButton.addEventListener('click', () => {
        const qrContainer = document.getElementById("qr-container")

        html2canvas(qrContainer)
            .then((canvas) => {
                const imageSrc = canvas.toDataURL('image/png')
                const a = document.createElement('a')
                a.href = imageSrc
                a.download = 'qr-code.png'
                a.click()
                input.value = ""

            })
            .catch(error => {
                console.error('Error to dowload:', error)
            })
    })
}