function homemap() {
  data = home_data
  console.log("Setting up map");
  var map = L.map('mapid', {
    crs: L.CRS.Simple
});
  var bounds = [[0,0], [1000,1000]];
  console.log("Map bounds set");
  var image = L.imageOverlay('map.png', bounds).addTo(map);
  console.log("Image added");
  map.fitBounds(bounds);
}
