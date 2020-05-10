var initialCoordinates = [-22.91, -43.20]; // Rio de Janeiro
var initialZoomLevel = 13;

// create a map in the "map" div, set the view to a given place and zoom
var map = L.map('map').setView(initialCoordinates, initialZoomLevel);

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; Contribuidores do <a href="http://osm.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var muxiCoordinates = [-22.903719, -43.1760605];
var muxiMarkerMessage = "A Muxi fica aqui.<br>Olá mundo!";

L.marker(muxiCoordinates).addTo(map)
    .bindPopup(muxiMarkerMessage)
    .openPopup();

var muxiCoordinates = [-22.903719, -43.1760605];
var muxiMarkerMessage = "A Muxi fica aqui.<br>Olá mundo!";

var muxiIconProperties = {
  iconUrl: "./static/img/maps-marker.png"
, iconSize: [44, 59]
, iconAnchor: [22, 59]
, popupAnchor: [0, -50]
};

var muxiIcon = L.icon(muxiIconProperties);

L.marker(muxiCoordinates, {icon: muxiIcon})
  .addTo(map)
  .bindPopup(muxiMarkerMessage)
;