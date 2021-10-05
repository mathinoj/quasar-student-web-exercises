'use strict';

mapboxgl.accessToken = firstMapboxLectureKey;
console.log(firstMapboxLectureKey);

// first we need variable that holds a map object
mapboxgl.accessToken = firstMapboxLectureKey;
console.log(firstMapboxLectureKey);


var map = new mapboxgl.Map(
    {
        container: 'map',
        style: 'mapbox://styles/mapbox/satellite-v9',
        center: [-98.48632214484502, 29.39340897528683],
        // minZoom: 5,
        // maxZoom: 20,
        zoom: 17,
    }
)

// SA GRID CORDS
// 98.4936, 29.4241

var marker = new mapboxgl.Marker({color:'orangered'})
    .setLngLat([-98.48632214484502, 29.39340897528683])
    .setPopup(new mapboxgl.Popup().setHTML("<em><strong>CARNITAS LONJA</strong></em>"))
    .addTo(map)

var rests = [
    {
        "lngLat": .setLngLat([-98.48632214484502, 29.39340897528683])",
        "popup": .setPopup(new mapboxgl.Popup().setHTML("<em><strong>CARNITAS LONJA</strong></em>")),

    }
]

// geocode('1107 Roosevelt Ave, San Antonio, TX 78210', firstMapboxLectureKey).then(function (results){
//     console.log(results);
//     map.setLayerZoomRange('my-layer', 5, 20);
// })