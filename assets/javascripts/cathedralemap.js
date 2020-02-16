var markers = {};

var map;

function resetMarkers(){
  markers.clean=true;
  
  for (var marker in markers){
    markers[marker].setMap(map);
  }
};

function setMarkers(map) {
  var image = {
    url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(20, 32),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 32),
  };

  var shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: 'poly'
  };

  markers.clean = true;

  for (var i = 0; i < cathedraled.length; i++) {
    var cathem = cathedraled[i];
  markers[cathem.primaryID] = new google.maps.Marker({
      position: { lat: cathem.latitude, lng: cathem.longitude },
      map: map,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 5.5,
        fillColor:'red',
        fillOpacity: 0.8,
        strokeColor: 'blue',
        strokeWeight:0.8
        },
      shape: shape,
      title: (cathem.noms + '\nLocation: ' + cathem.lieux || "undefined"),
      labels: cathem.primaryID,

      });
    
  }
}

function initMap() {
 map = new google.maps.Map(document.getElementById('map'), {
    zoom: 5.5,
    center: { lat: 46.8, lng: 2.2137 },
    mapTypeID: 'satellite'
  });

  setMarkers(map)
}