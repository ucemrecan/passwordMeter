const eyeSlash = document.getElementById("eyeSlash");
const lock = document.getElementById("lock");
const passwordField = document.getElementById("passwordField");
const icons = document.querySelector("iconColors");
const passwordText = document.getElementById("password");
const checksContainer = document.querySelector("checks");
const checkList = document.getElementById("checkList");


// click eye
let started = false;
eyeSlash.addEventListener("click", function() {
  if (!started) {
    passwordField.classList.add("whiteBg");
    eyeSlash.classList.remove("iconColors");
    lock.classList.remove("iconColors");
    passwordText.type = "text";
    eyeSlash.classList.remove("fa-eye-slash");
    eyeSlash.classList.add("fa-eye");
    started = true;
  } else {
    passwordField.classList.remove("whiteBg");
    eyeSlash.classList.add("iconColors");
    lock.classList.add("iconColors");
    passwordText.type = "password"
    eyeSlash.classList.add("fa-eye-slash");
    eyeSlash.classList.remove("fa-eye");
    started = false;
  }
});

// click password
passwordText.addEventListener("click", function() {
  checkList.classList.remove("displayNone");
});


// check conditions
// Upper case check
function upperCase() {
  if (passwordText.value.match(/[A-Z]/) != null) {
    document.getElementById("icon1").classList.remove("fa-times");
    document.getElementById("icon1").classList.add("fa-check");
  } else {
    document.getElementById("icon1").classList.add("fa-times");
    document.getElementById("icon1").classList.remove("fa-check");
  };
}

// Special character check
function specialCha() {
  if (passwordText.value.match(/[!@#$%^&*]/) != null) {
    document.getElementById("icon2").classList.remove("fa-times");
    document.getElementById("icon2").classList.add("fa-check");
  } else {
    document.getElementById("icon2").classList.add("fa-times");
    document.getElementById("icon2").classList.remove("fa-check");
  };
}

// Number checks
function numberCheck() {
  if (passwordText.value.match(/[0-9]/) != null) {
    document.getElementById("icon3").classList.remove("fa-times");
    document.getElementById("icon3").classList.add("fa-check");
  } else {
    document.getElementById("icon3").classList.add("fa-times");
    document.getElementById("icon3").classList.remove("fa-check");
  };
}

// More than 8 characters check
function characterLengthCheck() {
  if (passwordText.value.length >= 8) {
    document.getElementById("icon4").classList.remove("fa-times");
    document.getElementById("icon4").classList.add("fa-check");
  } else {
    document.getElementById("icon4").classList.add("fa-times");
    document.getElementById("icon4").classList.remove("fa-check");
  };
}

function checkConditions() {
  upperCase();
  specialCha();
  numberCheck();
  characterLengthCheck();
}
