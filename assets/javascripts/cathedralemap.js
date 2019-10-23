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
      for (var i = 0; i < cathedraled.length; i++) {
        var cenotaphm = cathedraled[i];
        var marker = new google.maps.Marker({
          position: {lat: cenotaphm.latitude, lng: cenotaphm.longitude},
          map: map,
          icon: image,
          shape: shape,
          title: cenotaphm.nom,
          labels: cenotaphm.nearestRelative
         
        });
      }
    }
  
    function initMap() {
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5.5,
        center: {lat: 46.2276, lng: 2.2137}
      });
  
      setMarkers(map);
    }