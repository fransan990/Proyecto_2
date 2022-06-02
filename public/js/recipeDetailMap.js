let map
let lata = (document.getElementById("lata").innerHTML) * 1
let lnga = (document.getElementById("lnga").innerHTML) * 1

function recipeDetailMap() {
    renderMap()
    placeMarkers()
}

function renderMap() {

    const { Map } = google.maps

    map = new Map(
        document.querySelector('.restuarantsMap'),
        {
            zoom: 10,

            center: { lat: lata, lng: lnga },
        }
    )
}


function placeMarkers() {

    const { Marker } = google.maps

    const position = {
        lat: lata,
        lng: lnga,
    }

    new Marker({ position, map })
}
