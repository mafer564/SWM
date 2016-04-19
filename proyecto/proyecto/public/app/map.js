var map;
function initMap() {
var myLatLng = {lat: 21.0083441, lng: -101.5967068};
var label = "4";

map = new google.maps.Map(document.getElementById('map'), {
center: myLatLng,
zoom: 5
});

var marker1 = new google.maps.Marker({
    position: myLatLng,
    map: map,
    label: label,
    title: 'Ciudad Juarez'
  });

var marker2 = new google.maps.Marker({
    position: {lat: 31.6829864, lng: -106.430311},
    map: map,
    label: 3,
    title: 'Ciudad Juarez'
  });

var marker3 = new google.maps.Marker({
      position: {lat: 31.6851179, lng: -106.4513484},
      map: map,
      label: 3,
      title: 'Ciudad Juarez'
    });

    var marker4 = new google.maps.Marker({
        position: {lat: 31.7262374, lng: -106.4120483},
        map: map,
        label: 4,
        title: 'Ciudad Juarez'
      });

      var marker5 = new google.maps.Marker({
          position: {lat: 31.7135379, lng: -106.3963948},
          map: map,
          label: 5,
          title: 'Ciudad Juarez'
        });

        var marker6 = new google.maps.Marker({
            position: {lat: 31.6857838, lng: -106.3782521},
            map: map,
            label: 2,
            title: 'Ciudad Juarez'
          });

          var marker7 = new google.maps.Marker({
              position: {lat: 21.0083441, lng: -101.5967068},
              map: map,
              label: 5,
              title: 'Guanajuato'
            });

            var marker8 = new google.maps.Marker({
                position: {lat: 21.0008188, lng: -101.5127853},
                map: map,
                label: 5,
                title: 'Guanajuato'
              });

              var marker9 = new google.maps.Marker({
                  position: {lat: 20.984617, lng: -101.5460905},
                  map: map,
                  label: 5,
                  title: 'Guanajuato'
                });

                var marker10 = new google.maps.Marker({
                    position: {lat: 21.0920522, lng: -101.6366945},
                    map: map,
                    label: 5,
                    title: 'Guanajuato'
                  });

                  var marker11 = new google.maps.Marker({
                      position: {lat: 21.1031245, lng: -101.6573609},
                      map: map,
                      label: 5,
                      title: 'Guanajuato'
                    });

                    var marker12 = new google.maps.Marker({
                        position: {lat: 19.4162235, lng: -99.1725188},
                        map: map,
                        label: 1,
                        title: 'CDMX'
                      });

                      var marker13 = new google.maps.Marker({
                          position: {lat: 19.4460867, lng: -99.131924},
                          map: map,
                          label: 1,
                          title: 'CDMX'
                        });

                        var marker14 = new google.maps.Marker({
                            position: {lat: 19.4169127, lng: -99.1573705},
                            map: map,
                            label: 1,
                            title: 'CDMX'
                          });

                          var marker15 = new google.maps.Marker({
                              position: {lat: 19.4463165, lng: -99.1433048},
                              map: map,
                              label: 1,
                              title: 'CDMX'
                            });
}
