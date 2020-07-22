(function() {
    const moment = require('moment');
    moment().format('YYYY');
    const footerWithYear = '&copy; ${moment}, All rights reserved | Design by Ying Jin.';
    const displayfooter = document.getElementById('.displayMoment');
    displayFooter.innerHTML = footerWithYear;

})();