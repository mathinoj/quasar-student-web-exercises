'use strict';

mapboxgl.accessToken = firstMapboxLectureKey;
console.log(firstMapboxLectureKey);

// first we need variable that holds a map object
mapboxgl.accessToken = firstMapboxLectureKey;
console.log(firstMapboxLectureKey);


// var map = new mapboxgl.Map(
//     {
//         container: 'map',
//         style: 'mapbox://styles/mapbox/satellite-v9',
//         center: [-98.48632214484502, 29.39340897528683],
//         // minZoom: 5,
//         // maxZoom: 20,
//         zoom: 17,
//     }
// )

// SA GRID CORDS
// 98.4936, 29.4241

// var marker = new mapboxgl.Marker({color: 'orangered'})
//     .setLngLat([-98.48632214484502, 29.39340897528683])
//     .setPopup(new mapboxgl.Popup().setHTML("<em><strong>CARNITAS LONJA</strong></em>"))
//     .addTo(map)



// mapboxgl.accessToken = firstMapboxLectureKey;
// const cityCoordinates = [
//     [-98.55789544461693, 29.48864759507882],
//     [-98.48632214484502, 29.39340897528683],
//     [-98.570000459961685, 29.511746976534077],
//     [-98.58423889023796, 29.53839297877265],
//     [-98.40468548399008, 29.387494627689]
// ];
//
// const map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/satellite-v9',
//     center: [-98.55789544461693, 29.48864759507882],
//     zoom: 17
// });
//
// map.on('load', () => {
//     for (const [index, coordinate] of cityCoordinates.entries()) {
//         setTimeout(() => {
//             map.flyTo({ center: coordinate });
//         }, 5000 * index);
//     }
// });


mapboxgl.accessToken = firstMapboxLectureKey;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-v9',
    center: [-98.55789544461693, 29.48864759507882],
    zoom: 19
});

var cityCoordinates = [
    [-98.55789544461693, 29.48864759507882],
    [-98.48632214484502, 29.39340897528683],
    [-98.570000459961685, 29.511746976534077],
    [-98.58423889023796, 29.53839297877265],
    [-98.40468548399008, 29.387494627689]
];


cityCoordinates.forEach(function(coordinate){
    console.log("here is a cordinate " +coordinate)
    // fly with default options to null island
})



// geocode('7959 Fredericksburg Rd Ste 151, San Antonio, TX 78229', firstMapboxLectureKey).then(function (results){
//     var popUp = new mapboxgl.Popup()
//         .setHTML('<em>WHAT IT DO</em>')
//
//     new mapboxgl.Marker()
//         .setLngLat(results)
//         .setPopup(popUp)
//         .addTo(map)
//
//     map.jumpTo({center: results})
//     map.flyTo({center: results})
// })


// var rests = [
//     {
//         "lngLat": ".setLngLat([-98.48632214484502, 29.39340897528683])",
//         "popup": "large",
//     }
// ]

// geocode('1107 Roosevelt Ave, San Antonio, TX 78210', firstMapboxLectureKey).then(function (results){
//     console.log(results);
//     map.setLayerZoomRange('my-layer', 5, 20);
// })

// geocode('7959 Fredericksburg Rd Ste 151, San Antonio, TX 78229', firstMapboxLectureKey).then(function (results){
//     map.setLayerZoomRange('my-layer', 10, 15)
// })
// wingstop

//Wingstop
//        "location": [-98.570000459961685, 29.511746976534077],

//Hon machi
// "location": [-98.58423889023796, 29.53839297877265],

// 2m
// "location": [-98.40468548399008, 29.387494627689],


// var restaurants = [
//     {
//         "place": "Wingstop",
//         "food": "wings",
//         // "location": [-98.570000459961685, 29.511746976534077],
//     },
//         {
//             "place": "Hon Machi",
//             "food": "Korean BBQ",
//             // "location": [-98.58423889023796, 29.53839297877265],
//         },
//         {
//             "place": "2M",
//             "food": "BBQ",
//             // "location": [-98.40468548399008, 29.387494627689],
//         }
//     ]
