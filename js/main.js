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
})

function checkInput() {

}

function setError(input, message) {
    const formInput = input.parentElement;
    const label = formInput.querySelector("label");

    label.innerText = message;

    formInput.classList.add("error");
}