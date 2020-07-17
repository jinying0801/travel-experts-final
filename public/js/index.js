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

// Gallery.
const imgList = [
    [1011, 'banff&lakelouise', 'https://www.banfflakelouise.com'],
    [1035, 'Toronto waterfall', 'https://www.todocanada.ca/Planning-a-Trip-to-Niagara-Falls-Canada'],
    [164, 'Venice', 'https://www.italyguides.it/en/veneto/venice'],
    [1039, 'Sichuan City,china', 'https://www.travelchinaguide.com/cityguides/sichuan'],
    [328, 'Singapore cable car', 'https://www.google.com/search?rlz=1C1GCEA_enCA824CA824&sxsrf=ALeKk02HLVRByfm6-3i-z-SajOFZSvBZ4w:1594441538277&source=univ&tbm=isch&q=singapore+cable+car&sa=X&ved=2ahUKEwjF7IPMrcTqAhVzFzQIHS1cBu0QsAR6BAgEEAE&biw=1745&bih=881'],
    [244, 'City of Vancouver', 'https://theculturetrip.com/north-america/canada/articles/20-must-visit-attractions-in-vancouver']
];

let imgTemplate = '';
const gallery = document.querySelector('.gallery');
imgList.forEach(function(item) {

    console.log(item);
    imgTemplate +=
        `<figure>
    <a href="${item[2]}"><img src="https://picsum.photos/id/${item[0]}/250/250" alt="${item[1]}" title="${item[1]}"></a> <figcaption>${item[1]}!</figcaption>
    </figure>`;

});
gallery.innerHTML = imgTemplate;