// Write your Javascript code.

    var x = document.getElementById("demo");
    function getLocation() {
        if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    }
        else {x.innerHTML = "Geolocation is not supported by this browser."; }
}

    function showPosition(position) {
        var latlondata =  position.coords.latitude + "," +position.coords.longitude;
    var latlon = "Your Latitude Position is:=" + position.coords.latitude + "," + "Your Longitude Position is:="  +position.coords.longitude;
        document.getElementById("result").innerHTML = latlon;
     

    var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="
+ latlondata + "&zoom=14&size=400x300&sensor=false";
        document.getElementById("mapholder").innerHTML = "<img src='" + img_url + "' />";
}

    function showError(error) {
        if (error.code == 1) {
        x.innerHTML = "User denied the request for Geolocation."
    }
    else if (err.code == 2) {
        x.innerHTML = "Location information is unavailable."
    }
    else if (err.code == 3) {
        x.innerHTML = "The request to get user location timed out."
    }
    else {
        x.innerHTML = "An unknown error occurred."
    }
    }
