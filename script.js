// Function to update the map and display information
function updateMapAndInfo(data) {
    const { lat, lng } = data.location;
    const { ip, isp, location } = data;

    // Update map view
    map.setView([lat, lng], 13);
    marker.setLatLng([lat, lng]);

    // Update information display
    document.getElementById('ipAddress').textContent = ip;
    document.getElementById('location').textContent = `${location.city}, ${location.region} ${location.postalCode}`;
    document.getElementById('UTC').textContent = `UTC ${location.timezone}`;
    document.getElementById('ISP').textContent = isp;
    console.log(data);
}

// Initialize the map
var map = L.map('map').setView([0,0], 13);
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
osm.addTo(map);

// Initialize marker
var marker = L.marker([0,0]);
marker.addTo(map);

// Fetch and display data on page load
document.addEventListener('DOMContentLoaded', function() {
    const geoApi = `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_6WtkFmxfen4ndXEJIaGWkb2Giy9PA`;

    // Fetch data from the API
    fetch(geoApi)
        .then(response => response.json())
        .then(data => {
            updateMapAndInfo(data);
        })
        .catch(error => {
            console.error('Error fetching IP data:', error);
            alert('Could not retrieve data. Please try again.');
        });
});

// Event listener for the search button
document.getElementById('searchBtn').addEventListener('click', function() {
    const ipAddress = document.getElementById('ipInput').value;
    const geoApi = `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_6WtkFmxfen4ndXEJIaGWkb2Giy9PA&ipAddress=${ipAddress}`;

    // Fetch data from the API
    fetch(geoApi)
        .then(response => response.json())
        .then(data => {
            updateMapAndInfo(data);
        })
        .catch(error => {
            console.error('Error fetching IP data:', error);
            alert('Could not retrieve data. Please try again.');
        });
});
