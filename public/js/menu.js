//  Hamburger Menu.
const button = document.querySelector('.ham-menu');
const menu = document.querySelector('.dropdown-content');
var handlemenu = function() {
    menu.classList.toggle('visible');
}
console.log(button);
button.addEventListener('click', handlemenu);