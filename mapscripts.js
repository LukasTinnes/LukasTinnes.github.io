// import { saveAs } from 'file-saver';
//saveAs
/*
// Icons
var Pig_in_a_blanket = L.icon({
    iconUrl: 'icons/Pig_in_a_blanket.png',

    iconSize:     [20, 20], // size of the icon
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    popupAnchor:  [20, 20] // point from which the popup should open relative to the iconAnchor
});
var Timbel = L.icon({
    iconUrl: 'icons/Timbel.png',

    iconSize:     [20, 20], // size of the icon
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    popupAnchor:  [20, 20] // point from which the popup should open relative to the iconAnchor
});
var Jhin = L.icon({
    iconUrl: 'icons/Jhin.png',

    iconSize:     [20, 20], // size of the icon
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    popupAnchor:  [20, 20] // point from which the popup should open relative to the iconAnchor
});
var Maximilia = L.icon({
    iconUrl: 'icons/Maximilia.png',

    iconSize:     [20, 20], // size of the icon
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    popupAnchor:  [20, 20] // point from which the popup should open relative to the iconAnchor
});
var Charles = L.icon({
    iconUrl: 'icons/Charles.png',

    iconSize:     [20, 20], // size of the icon
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    popupAnchor:  [20, 20] // point from which the popup should open relative to the iconAnchor
});
var Trump = L.icon({
    iconUrl: 'icons/Trump.png',

    iconSize:     [20, 20], // size of the icon
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    popupAnchor:  [20, 20] // point from which the popup should open relative to the iconAnchor
});
var Ikwii = L.icon({
    iconUrl: 'icons/Ikwii.png',

    iconSize:     [20, 20], // size of the icon
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    popupAnchor:  [20, 20] // point from which the popup should open relative to the iconAnchor
});
var Beatrice = L.icon({
    iconUrl: 'icons/Beatrice.png',

    iconSize:     [50, 50], // size of the icon
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    popupAnchor:  [20, 20] // point from which the popup should open relative to the iconAnchor
});
var Boris = L.icon({
    iconUrl: 'icons/Boris.png',

    iconSize:     [20, 20], // size of the icon
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    popupAnchor:  [20, 20] // point from which the popup should open relative to the iconAnchor
});
var Arthur = L.icon({
    iconUrl: 'icons/Arthur.png',

    iconSize:     [20, 20], // size of the icon
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    popupAnchor:  [20, 20] // point from which the popup should open relative to the iconAnchor
});
var Chester = L.icon({
    iconUrl: 'icons/Chester.png',

    iconSize:     [20, 20], // size of the icon
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    popupAnchor:  [20, 20] // point from which the popup should open relative to the iconAnchor
});
var Das_Schild = L.icon({
    iconUrl: 'icons/Das_Schild.png',

    iconSize:     [20, 20], // size of the icon
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    popupAnchor:  [20, 20] // point from which the popup should open relative to the iconAnchor
});
var Bobby_die_Ratte = L.icon({
    iconUrl: 'icons/Bobby_die_Ratte.png',

    iconSize:     [20, 20], // size of the icon
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    popupAnchor:  [20, 20] // point from which the popup should open relative to the iconAnchor
});
*/
function homemap() {
  data = home_data
  console.log("Setting up map");
  var map = L.map('mapid', {
    crs: L.CRS.Simple
});
  var bounds = [[0,0], [1000,1000]];
  console.log("Map bounds set");
  var image = L.imageOverlay('map.jpeg', bounds).addTo(map);
  console.log("Image added");
  map.fitBounds(bounds);
}

function onEachFeature(feature, layer){

};
