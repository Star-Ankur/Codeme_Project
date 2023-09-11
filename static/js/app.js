$.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyAuIAOQzKbItCY-cRE1NdOtGClSOLi4tkI&libraries=&v=weekly")
.done(function(script, textStatus) {
  google.maps.event.addDomListener(window, "load", initMap)
})

"use strict";


var pos = {
  lat: 31.781511,
  lng: 86.998999
};
let infoWindow;


function initMap() {

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, () => {
      alert("Can't get your coordinates!");
    });
  }
  
  function success(position) {
    pos.lat = position.coords.latitude;
    pos.lng = position.coords.longitude;
    console.log(1);
    console.log(pos.lat);
    console.log(pos.lng);

    const map = new google.maps.Map(document.getElementById("gmp-map"), {
      zoom: 14,
      center: pos,
      fullscreenControl: false,
      zoomControl: true,
      streetViewControl: false
    });

    new google.maps.Marker({
      position: pos,
      map,
      title: "My location"
    });
  }

  
  // infoWindow = new google.maps.InfoWindow();

    // infoWindow.setPosition(pos);
    // infoWindow.setContent("Location found.");
    // infoWindow.open(map);
    // map.setCenter(pos);
    console.log(2);
    console.log(pos.lat);
    console.log(pos.lng);
  
}

