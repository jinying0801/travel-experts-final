// Author: Ying Jin
// Date: 12-july-2020
// Course Module: 
//               course name: Web Application Development (CPRG-210-XM1);
//               content: HTML, CSS, JavaScript;
// Assignment 2: Website enhancements:
//               Using the code you wrote for Assignment 1, enhance travel website.
//               update existing code to fix bugs and modify the design as needed.

//  Hamburger Menu.
const button = document.querySelector('.ham-menu');
const menu = document.querySelector('.dropdown-content');
var handlemenu = function() {
    menu.classList.toggle('visible');
}
console.log(button);
button.addEventListener('click', handlemenu);

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