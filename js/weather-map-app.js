// $.get('http://api.openweathermap.org/data/2.5/forecast', {
//     APPID: openWeatherKey,
//     q: 'San Antonio, US',
//     units: 'imperial'
// }).done(function (data) {
//     console.log(data);
// })

// (function () {
"use strict";

function getWeather(weather) {
    var html = '<div>';
    // html += '<h2>' + weather.icon + '</h2>';
    html += '<h2>' + weather.dt_txt + '</h2>';
    // html += '<h2>' + weather.dt.toLocaleDateString("en-US") + '</h2>';
    html += '<h2>' + 'Temp: ' + weather.main.temp + '</h2>';
    html += '<h3>' + 'Humidity: ' + weather.main.humidity + '</h3>';
    html += '<h4>' + 'Wind Speed: ' + weather.wind.speed + '</h4>'
    // html += '<h6>' + weather.main.pressure + '</h6>'
    // html += '<ul>' + wind.categories.join(', ') + '</ul>'
    html += '</div>';

    return html;
}


$.get('http://api.openweathermap.org/data/2.5/forecast', {
    APPID: openWeatherKey,
    q: 'San Antonio, US',
    units: 'imperial',
}).done(function (data) {
        console.log(data);
        var typesHTML = getWeather(data.list[6])
        console.log(data.list[i])
        console.log(typesHTML);
        // $('.card-text').append(typesHTML); THIS WOULD APPLY TO ONLY ONE CARD, NOT ALL FIVE
        // This function creates a variable (typesHTML) which takes specific items within the list.
        // It specifically starts at the six Index
        // function that fires off when we create an AJAX request which in this scenario is the $.get(weatherMAP link)
        var fiveDayWeathers = [];
        // [] is shorthand for creating an empty array. While also a data structure similar to an object, it is a
        // special form of an object that stores sequences of values.
        // When an array is created it automatically has a special property added to it that will reflect the number
        // of elements stored: length.
        // So, basically an array is a special data structure that expects a sequence of data. Because of this a
        // property is added automatically that represents the length of the data structure.
        // {} is shorthand for creating an empty object. You can consider this as the base for other object types.
        // USED [] because I needed it to take in DATA, which in this scenario was taken from data.list[i].
        // List(".list") was taken from the console from the weather map list.
        for (var i = 6; i < data.list.length; i += 8) {
            console.log(data.list[i])
            fiveDayWeathers.push(data.list[i])
            // The push() method adds new items to the end of an array. Push() changes the length of the array and returns the new length.
            // I believe we use the .push method to create a new array, which will be used in the next loop
            // We created this function to pull all the weather info from the specific time/dates we want
            // For this function we are starting at "list index 5" and going through the length of the list (there were
            // like 40 objects in list) and then we incremented by 8 indexes to get to the next "list index number"
            // which would have been "index number 13.
            // We push this data onto the fiveDayWeathers variable so we can use in the next loop
        }
        for (var i = 0; i < fiveDayWeathers.length; i++) {
            var oneDayWeather = getWeather(fiveDayWeathers[i])
            $('.card-text').eq(i).append(oneDayWeather)
            // This function takes in the information that we got from the loop above so we can apply to our five day forecast cards
            // the .eq() method constructs a new jQuery object from one element within that set. The supplied index identifies the
            // position of this element in the set.
            // So in this forLoop the "i" is the "index" number for which you are pulling data from. The loop starts at "index 0",
            // which from the forLoop above starts at 5 but here it is "0 (zero)".
            // The append method applies the information that we retrieved and uses it for the five cards
        }

        // var date = weather.dt
        // for (var i=0; i < fiveDayWeathers.length; i++){
        //
        // }
    })

mapboxgl.accessToken = firstMapboxLectureKey;
console.log(firstMapboxLectureKey);

// first we need variable that holds a map object
mapboxgl.accessToken = firstMapboxLectureKey;
console.log(firstMapboxLectureKey);

var coordinates = document.getElementById('coordinates');
var map = new mapboxgl.Map(
    {
        container: 'map',
        width: 100,
        style: 'mapbox://styles/mapbox/outdoors-v11',
        center: [-98.55791153784084, 29.488381434651984],
        // minZoom: 5,
        // maxZoom: 20,
        zoom: 17,
    });

// mapboxgl.accessToken = 'pk.eyJ1IjoibWF0aGlub2oiLCJhIjoiY2t1Y3p4aXk5MTV0MTJvbzgxc3d4OGxpciJ9.wg0dcZMC8hFLArQLFsoT7A';
// const coordinates = document.getElementById('coordinates');
// const map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/streets-v11',
//     center: [0, 0],
//     zoom: 2
// });

var marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([-98.55791153784084, 29.488381434651984])
    .addTo(map);

function onDragEnd() {
    var lngLat = marker.getLngLat();
    coordinates.style.display = 'block';
    coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
}

marker.on('dragend', onDragEnd);




// geocode('Austin, TX', firstMapboxLectureKey).then(function(results){
//     console.log(results)
// })