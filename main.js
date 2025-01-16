import createQr from "./js/buttonQr.js";
import copyToClipBoard from "./js/copyToClipBoard.js";
import download from "./js/download.js";

document.addEventListener('DOMContentLoaded', () => {
    createQr()
    copyToClipBoard()
    download()
})