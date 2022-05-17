let button = document.getElementById("claim-free");
let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let email = document.getElementById("email");
let password = document.getElementById("password");

let form = document.getElementById("form-input");

form.addEventListener('submit', function(e) {
    e.preventDefault();
    // window.location.reload();

    if (firstName.value === "") {
        setError(firstName, "First Name cannot be empty")
    } else {
        firstName.parentElement.classList.remove("error")
    }

    if (lastName.value === "") {
        setError(lastName, "Last Name cannot be empty")
    } else {
        lastName.parentElement.classList.remove("error")
    }

    if (email.value === "") {
        setError(email, "Email cannot be empty")
    } else if (!checkEmail(email.value)) {
        setError(email, "Email is not valid")
    } else {
        email.parentElement.classList.remove("error")
    }

    if (password.value === "") {
        setError(password, "Password cannot be empty")
    } else if (password.value.length < 8) {
        setError(password, "Password length must be atleast 8 characters")
    } else {
        password.parentElement.classList.remove("error")
    }
})

function setError(input, message) {
    const formInput = input.parentElement;
    const label = formInput.querySelector("label");

    label.innerText = message;

    formInput.classList.add("error");
}

function checkEmail(emails) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(emails);
}