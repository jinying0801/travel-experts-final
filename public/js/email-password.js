//  validate the entered repeat password .
var password = document.getElementById("initial-password"),
    confirmPassword = document.getElementById("psw-repeat");

function validatePassword() {
    if (password.value != confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords Don't Match");
    } else {
        confirmPassword.setCustomValidity('');
    }
}
password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;