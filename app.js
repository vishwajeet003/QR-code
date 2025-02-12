let imgContainer = document.getElementById("img-container");
let img = document.getElementById("qr-img");
let userInput = document.getElementById("userInput");

function qrGenerate() {
  let inputValue = encodeURIComponent(userInput.value);
  img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
  imgContainer.classList.add("show-img");
  // if (userInput.value > 0) {

  // }
  // else if (userInput.value <= 0) {
  //   userInput.classList.add("empty");
  //   setTimeout(() => {
  //     userInput.classList.remove("empty");
  //   }, 1000);
  // }
}
