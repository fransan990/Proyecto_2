// let map

// function recipeCreateMap() {
//     renderMap()
//     // getRestaurants()
//     initMap()
//     selectMatchPlace()
// }

// function renderMap() {

//     const { Map, Marker } = google.maps

//     map = new Map(
//         document.querySelector('.restuarantsMap'),
//         {
//             center: { lat: 40.392499, lng: -3.698214 },
//             zoom: 10,
//         }
//     )
// }

// // function getRestaurants() {

// //     axios.get('/api/places')
// //         .then(({ data }) => placeMarkers(data))
// //         .catch(err => consoel.log(err))
// // }
// function selectMatchPlace() {
//     google.maps.event.addListener(map, 'click', function (event) {
//         centerLat = document.getElementById("lat").value = event.latLng.lat();
//         centerLng = document.getElementById("lng").value = event.latLng.lng();
//         placeMatchMarkers(centerLat, centerLng)
//     })
// }

// function placeMarkers(restaurants) {

//     const { Marker } = google.maps

//     restaurants.forEach(restaurant => {

//         const position = {
//             lat: restaurant.location.coordinates[0],
//             lng: restaurant.location.coordinates[1],
//         }

//         new Marker({ position, title: restaurant.name, map })
//     })
// }


function initMap() {
    var map = new google.maps.Map(document.querySelector('.restuarantsMap'), {
        center: { lat: 40.428053491470116, lng: - 3.695888360958946 },

        zoom: 13
    });
    var input = document.getElementById('searchInput');
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', map);

    var infowindow = new google.maps.InfoWindow();
    var marker = new google.maps.Marker({
        map: map,
        anchorPoint: new google.maps.Point(0, -29)
    });

    autocomplete.addListener('place_changed', function () {
        infowindow.close();
        marker.setVisible(false);
        var place = autocomplete.getPlace();
        if (!place.geometry) {
            window.alert("Autocomplete's returned place contains no geometry");
            return;
        }

        // If the place has a geometry, then present it on a map.
        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);
        }
        marker.setIcon(({
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(35, 35)
        }));
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);

        var address = '';
        if (place.address_components) {
            address = [
                (place.address_components[0] && place.address_components[0].short_name || ''),
                (place.address_components[1] && place.address_components[1].short_name || ''),
                (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
        }

        infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
        infowindow.open(map, marker);

        //Location details
        for (var i = 0; i < place.address_components.length; i++) {
            if (place.address_components[i].types[0] == 'postal_code') {
                document.getElementById('postal_code').innerHTML = place.address_components[i].long_name;
            }
            if (place.address_components[i].types[0] == 'country') {
                document.getElementById('country').innerHTML = place.address_components[i].long_name;
            }
        }
        document.getElementById('location').innerHTML = place.formatted_address;
        document.getElementById('lat').value = place.geometry.location.lat();
        document.getElementById('lng').value = place.geometry.location.lng();
    });
}