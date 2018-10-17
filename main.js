for (var j = 0; j < document.getElementsByClassName('map-marker-label').length; j++) {
    code = [];
    city = document.getElementsByClassName('map-marker-label')[j].innerHTML;
    for (var i = 0; i < airports.length; i++) {
        if (airports[i].name) {
            bool = airports[i].name.includes(city);
            if (bool) {
                code.push(airports[i].iata)
            }
        }
        if (code === []) {
            document.getElementsByClassName('map-marker-label')[j].innerHTML = city;
        } else {
            document.getElementsByClassName('map-marker-label')[j].innerHTML = city + '('
            code.join(", ") + ')';
        }
    }
}