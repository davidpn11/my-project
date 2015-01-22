var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(initialize, showError, {
            timeout: 5000
        });
    } else {
        x.innerHTML = "Geolocalização não é suportada nesse browser.";
    }
}

function initialize(position) {
    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer();


    lat = position.coords.latitude;
    lon = position.coords.longitude;
    latlon = new google.maps.LatLng(lat, lon);

    var map = new google.maps.Map(document.getElementById('map_canvas'), {
        zoom: 14,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: true,
        overviewMapControl: false,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById('panel'));

    var request = {
        origin: latlon,
        destination: 'CEFET MG Campus II',
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    };

    directionsService.route(request, function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        }
    });
}

function showError() {
    /*switch (error.code) {
    case error.PERMISSION_DENIED:
        x.innerHTML = "Usuário rejeitou a solicitação de Geolocalização."
        break;
    case error.POSITION_UNAVAILABLE:
        x.innerHTML = "Localização indisponível."
        break;
    case error.TIMEOUT:
        x.innerHTML = "O tempo da requisição expirou."
        break;
    case error.UNKNOWN_ERROR:
        x.innerHTML = "Algum erro desconhecido aconteceu."
        break;
    }*/
    latlon= new google.maps.LatLng(-19.93841, -43.99969);
    var mapOpt = {
        zoom: 16,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: true,
        overviewMapControl: false,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: latlon
        
    }
    var map = new google.maps.Map(document.getElementById("map_canvas"), mapOpt);
    var marker=new google.maps.Marker({position: latlon, map:map});
}