const confirmButton = document.querySelector("#confirm");
const continueButton = document.querySelector("#continue");
const form = document.querySelector("#form");
const thanks = document.querySelector("#thanks");
const cardnamein = document.querySelector("#cardname");
const cardname = document.querySelector(".cardfront__name");
const cardmmin = document.querySelector("#cardmm");
const cardmm = document.querySelector(".cardfront__mm");
const cardyyin = document.querySelector("#cardyy");
const cardyy = document.querySelector(".cardfront__yy");
const cardnumberin = document.querySelector("#cardccn");
const cardnumber = document.querySelector(".cardfront__number");
const cardcvcin = document.querySelector("#cardcvc");
const cardcvc = document.querySelector(".cardback__cvc");

const confirmButtonHandler = () => {
  form.classList.add("invisible");
  thanks.classList.remove("invisible");
};
const continueButtonHandler = () => {
  form.classList.remove("invisible");
  thanks.classList.add("invisible");
};

confirmButton.addEventListener("click", confirmButtonHandler);
continueButton.addEventListener("click", continueButtonHandler);
cardnamein.addEventListener(
  "input",
  () => (cardname.textContent = cardnamein.value)
);
cardmmin.addEventListener("input", () => (cardmm.textContent = cardmmin.value));
cardyyin.addEventListener("input", () => (cardyy.textContent = cardyyin.value));
cardnumberin.addEventListener(
  "input",
  () => (cardnumber.textContent = cardnumberin.value)
);

const username = document.getElementById("cardmm");
username.addEventListener("input", function (event) {
  if (username.validity.patternMismatch) {
    username.setCustomValidity("Please enter a valid username.");
  } else {
    username.setCustomValidity("");
  }
});

cardcvcin.addEventListener(
  "input",
  () => (cardcvc.textContent = cardcvcin.value)
);
