// add current 4 digital footer year to footer.
fetch('http://localhost:3000/api/getYear')
    //fetch('https://travel-experts-ying.herokuapp.com/api/destinations')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        document.getElementById('footerYear').innerHTML = data.year;
    });