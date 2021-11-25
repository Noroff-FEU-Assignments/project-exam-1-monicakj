const form = document.querySelector("#comment-form");
const button = document.querySelector("#button");

const comment = document.querySelector("#fname");
const commentError = document.querySelector("#commentError");

function validateForm(event) {
    event.preventDefault();

    if (checkLength(comment.value, 24) === true) {
        commentError.style.display = "none";
    } else {
        commentError.style.display = "block";
    }
}

function checkButtonDisabled() {
    if (checkLength(comment.value, 24)) {
        button.disabled = false;
    } else {

        message.innerHTML = "";

        button.disabled = true;
    }
}

function checkLength(value, len) {
    if(value.trim().length > len) {
        return true;
    }
    else {
        return false;
    }
}

function messageSubmit(event) {
    event.preventDefault(); 
    if(checkLength(comment.value, 24)) {
        messageSuccess.innerHTML = `<div class="comment-success">
                                        <h2>Comment published!</h2>
                                    </div>`;
        form.reset();
    }
}