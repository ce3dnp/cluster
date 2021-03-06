Template.mainLeftCol.helpers({
  exampleMapOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // We can use the `ready` callback to interact with the map API once the map is ready.
      GoogleMaps.ready('exampleMap', function(map) {
        // Add a marker to the map once it's ready
        // var marker = new google.maps.Marker({
        //   position: map.options.center,
        //   map: map.instance
        // });
      });

      // Map initialization options
      return {
        center: new google.maps.LatLng(52.400, -3.191),
        zoom: 1
      };
    }
  }
});