
export const input = document.querySelector('#url-qr-input')

export default function generateQr() {

  const urlValue = input.value
  const aux = new QRCode(document.getElementById("qr-container"), {
    text: urlValue,
    width: 250,
    height: 250,
  });
}
