let map

function recipeCreateMap() {
    renderMap()
    getRestaurants()
    initMap()
}

function renderMap() {

    const { Map, Marker } = google.maps

    map = new Map(
        document.querySelector('.restuarantsMap'),
        {
            center: { lat: 40.392499, lng: -3.698214 },
            zoom: 10,
        }
    )
}

function getRestaurants() {

    axios.get('/api/places')
        .then(({ data }) => placeMarkers(data))
        .catch(err => consoel.log(err))
}

function placeMarkers(restaurants) {

    const { Marker } = google.maps

    restaurants.forEach(restaurant => {

        const position = {
            lat: restaurant.location.coordinates[0],
            lng: restaurant.location.coordinates[1],
        }

        new Marker({ position, title: restaurant.name, map })
    })
}


let marker;
let geocoder;
let responseDiv;
let response;

function initMap() {

    geocoder = new google.maps.Geocoder();

    const inputText = document.createElement("input");

    inputText.type = "text";
    inputText.placeholder = "Enter a location";

    const submitButton = document.createElement("input");

    submitButton.type = "button";
    submitButton.value = "Geocode";
    submitButton.classList.add("button", "button-primary");

    const clearButton = document.createElement("input");

    clearButton.type = "button";
    clearButton.value = "Clear";
    clearButton.classList.add("button", "button-secondary");
    response = document.createElement("pre");
    response.id = "response";
    response.innerText = "";
    responseDiv = document.createElement("div");
    responseDiv.id = "response-container";
    responseDiv.appendChild(response);

    const instructionsElement = document.createElement("p");

    instructionsElement.id = "instructions";
    instructionsElement.innerHTML =
        "<strong>Instructions</strong>: Enter an address in the textbox to geocode or click on the map to reverse geocode.";
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(inputText);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(submitButton);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(clearButton);
    map.controls[google.maps.ControlPosition.LEFT_TOP].push(instructionsElement);
    map.controls[google.maps.ControlPosition.LEFT_TOP].push(responseDiv);
    marker = new google.maps.Marker({
        map,
    });
    map.addListener("click", (e) => {
        geocode({ location: e.latLng });
    });
    submitButton.addEventListener("click", () =>
        geocode({ address: inputText.value })
    );
    clearButton.addEventListener("click", () => {
        clear();
    });
    clear();
}

function clear() {
    marker.setMap(null);
    responseDiv.style.display = "none";
}

function geocode(request) {
    clear();
    geocoder
        .geocode(request)
        .then((result) => {
            const { results } = result;

            map.setCenter(results[0].geometry.location);
            marker.setPosition(results[0].geometry.location);
            marker.setMap(map);
            responseDiv.style.display = "block";
            response.innerText = JSON.stringify(result, null, 2);
            return results;
        })
        .catch((e) => {
            alert("Geocode was not successful for the following reason: " + e);
        });
}

window.initMap = initMap;