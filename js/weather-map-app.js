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
    html += '<h2>' + weather.dt_txt + '</h2>';
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
})

    .done(function (data) {
        console.log(data);
        var typesHTML = getWeather(data.list[5])
        console.log(data.list[i])
        console.log(typesHTML);
        // $('.card-text').append(typesHTML);

        var fiveDayWeathers = [];
        for (var i = 5; i < data.list.length; i += 8) {
            console.log(data.list[i])
            fiveDayWeathers.push(data.list[i])
            // The push() method adds new items to the end of an array.
            // push() changes the length of the array and returns the new length.
        }


        for (var i = 0; i < fiveDayWeathers.length; i++) {
            var oneDayWeather = getWeather(fiveDayWeathers[i])
            $('.card-text').eq(i).append(oneDayWeather)
        }

    })

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


geocode('Austin, TX', firstMapboxLectureKey).then(function(results){
    console.log(results)
})