function initialize() {
  // Retrieve map attributes
  var mapElement = document.getElementById('map');
  var latitude = parseFloat(mapElement.getAttribute('data-latitude'));
  var longitude = parseFloat(mapElement.getAttribute('data-longitude'));
  var markerImage = mapElement.getAttribute('data-marker');
  var markerName = mapElement.getAttribute('data-marker-name');

  // Initialize the map
  var map = L.map('map').setView([latitude, longitude], 13);

  // Add a tile layer to the map (OpenStreetMap)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Add a custom marker
  var markerIcon = L.icon({
    iconUrl: markerImage,
    iconSize: [32, 32], // Size of the marker
    iconAnchor: [16, 32], // Point of the icon which will correspond to marker's location
    popupAnchor: [0, -32] // Point from which the popup should open relative to the iconAnchor
  });

  var marker = L.marker([latitude, longitude], { icon: markerIcon }).addTo(map);

  // Bind a popup to the marker
  marker.bindPopup(markerName).openPopup();
}

// Initialize the map when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initialize);