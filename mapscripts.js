function homemap() {
  let map = null;
  console.log("Setting up map");
  var map = L.map('mapid', {
    crs: L.CRS.Simple
});
  var bounds = [[0,0], [1000,1000]];
  var image = L.imageOverlay('map.png', bounds).addTo(map);
  map.fitBounds(bounds);
}
