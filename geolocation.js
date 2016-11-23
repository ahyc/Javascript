function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        document.write("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    document.write("Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude);
}
