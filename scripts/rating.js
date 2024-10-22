
const rangevalue = document.querySelector("#rate-num");
const range = document.querySelector("#rate");

range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}


const password = document.querySelector("#pass");
const confirmPassword = document.querySelector("#go");
const message = document.querySelector("#message");

password.addEventListener("keyup", clearMessage);
confirmPassword.addEventListener("focusout", onChange);

function onChange() {
    if (password.value != confirmPassword.value) {
        message.textContent = "Password does not match";
        message.style.color = "red";
    } else {
        message.textContent = "";
    }
}

function clearMessage() {
    if (password.value == "") {
        message.textContent = "";
    }
}