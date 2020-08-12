// import { saveAs } from 'file-saver';
//saveAs

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

function saveToFile(content, filename) {
      import FileSaver from "FileSaver.js"
      var file = filename + '.geojson';
      FileSaver.saveAs(new File([JSON.stringify(content)], file, {
        type: "text/plain;charset=utf-8"
      }), file);
    }

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
  poiLayer = L.featureGroup();
  poiLayer.addTo(map)
  var coorsLayer = L.geoJSON(data, {
  pointToLayer: function (feature, latlng) {
    switch (feature.properties.name) {
      case 'Pig_in_a_blanket':
        return L.marker(latlng, {icon: Pig_in_a_blanket, draggable:'true'});
        break;
      case 'Timbel':
        return L.marker(latlng, {icon: Timbel, draggable:'true'});
        break;
      case 'Jhin':
        return L.marker(latlng, {icon: Jhin, draggable:'true'});
        break;
      case 'Maximilia':
        return L.marker(latlng, {icon: Maximilia, draggable:'true'});
        break;
      case 'Charles':
        return L.marker(latlng, {icon: Charles, draggable:'true'});
        break;
      case 'Trump':
        return L.marker(latlng, {icon: Trump, draggable:'true'});
        break;
      case 'Ikwii':
        return L.marker(latlng, {icon: Ikwii, draggable:'true'});
        break;
      case 'Beatrice':
        return L.marker(latlng, {icon: Beatrice, draggable:'true', className:'images'});
        break;
      case 'Boris':
        return L.marker(latlng, {icon: Boris, draggable:'true'});
        break;
      case 'Arthur':
        return L.marker(latlng, {icon: Arthur, draggable:'true'});
        break;
      case 'Chester':
        return L.marker(latlng, {icon: Chester, draggable:'true'});
        break;
      case 'Das_Schild':
        return L.marker(latlng, {icon: Das_Schild, draggable:'true'});
        break;
      case 'Bobby_die_Ratte':
        return L.marker(latlng, {icon: Bobby_die_Ratte, draggable:'true'});
        break;
      default:
        return L.marker(latlng, {draggable:'true'});
    }

  },
  onEachFeature: onEachFeature
}).addTo(poiLayer);
map.on('zoomend', function() {
    console.log("Zoomend");
    var newzoom = '' + (2*(map.getZoom())) +'px';
    $('#mapid .images').css({'width':newzoom,'height':newzoom});
});
var collection = coorsLayer.toGeoJSON();
console.log(collection);
// Test geojson save
saveToFile(collection, 'test');
}

function onEachFeature(feature, layer){

};
