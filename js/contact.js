const form = document.querySelector("#contactForm");
const button = document.querySelector("#button");

const fname = document.querySelector("#fname");
const fnameError = document.querySelector("#fnameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");

function validateForm(event) {
    event.preventDefault();

    if (checkLength(fname.value, 4) === true) {
        fnameError.style.display = "none";
    } else {
        fnameError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checkLength(subject.value, 9) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if (checkLength(message.value, 24) === true) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }
    
    console.log("Thank you for contacting us. We will be in touch with you very soon!");
}

function checkButtonDisabled() {
    if (checkLength(fname.value, 4) && validateEmail(email.value) && checkLength(subject.value, 9) && checkLength(message.value, 24)) {
        button.disabled = false;
    } else {

        message.innerHTML = "";

        button.disabled = true;
    }
}

fname.addEventListener("keyup", checkButtonDisabled);
email.addEventListener("keyup", checkButtonDisabled);
subject.addEventListener("keyup", checkButtonDisabled);
message.addEventListener("keyup", checkButtonDisabled);

function submitForm(submit) {
    submit.preventDefault();

    message.innerHTML = '<div id="message">Your message has been sent!</div>';

    form.reset();
}

form.addEventListener("submit", validateForm);


function checkLength(value, len) {
    if (value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}