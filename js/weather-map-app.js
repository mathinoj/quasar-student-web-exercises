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
    html += '<h2>' + weather.main.temp + '</h2>';
    html += '<h3>' + weather.main.humidity + '</h3>';
    html += '<h4>' + weather.wind.speed + '</h4>'
    html += '<h6>' + weather.main.pressure + '</h6>'
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
        }


        for (var i = 0; i < fiveDayWeathers.length; i++) {
            var oneDayWeather = getWeather(fiveDayWeathers[i])
            $('.card-text').eq(i).append(oneDayWeather)
        }

    })

// for (let i = 0; i < a.length; i++) {
//     if (a[i] === theValue) {
//         break;
//     }
// }


//         $.ajax("data/blog.json", {
//             type: 'GET'
//         }).done(function (data) {
//             console.log(data);
//             data.forEach(function (blog) {
//                 var blogHtml = renderBlog(blog);
//                 console.log(blogHtml);
//                 $( "#posts" ).append( blogHtml );
//             });
//         });
//     }


//
//
//     $.ajax("data/blog.json", {
//         type: 'GET'
//     }).done(function (data) {
//         console.log(data);
//         data.forEach(function (blog) {
//             var blogHtml = renderBlog(blog);
//             console.log(blogHtml);
//             $( "#posts" ).append( blogHtml );
//         });
//     });
// }
// })();

// $.get("http://api.openweathermap.org/data/2.5/weather", {
//     APPID: openWeatherKey,
//     q:     "San Antonio, US",
//     units: "imperial"
// }).done(function (data){
//     console.log(data);
// })

// $.get("http://api.openweathermap.org/data/2.5/forecast?q={San+Antonio,+US}&appid={openWeatherKey}");
// $.get("http://api.openweathermap.org/data/2.5/forecast?q=San+Antonio,+US&appid=openWeatherKey");


// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}

// (function () {
//     "use strict";
//     {
//         function renderBlog(blog) {
//             var html = '<div>';
//             // html += '<tr>';
//             html += '<h2>' + blog.title + '</h2>';
//             html += '<p>' + blog.content + '</p>'
//             html += '<h6>' + blog.date + '</h6>'
//             html += '<ul>' + blog.categories.join(', ') + '</ul>'
//             html += '</div>';
//
//             return html;
//         }
//
//
//         $.ajax("data/blog.json", {
//             type: 'GET'
//         }).done(function (data) {
//             console.log(data);
//             data.forEach(function (blog) {
//                 var blogHtml = renderBlog(blog);
//                 console.log(blogHtml);
//                 $( "#posts" ).append( blogHtml );
//             });
//         });
//     }
// })();

// function renderCoffees(coffees) {
//     var html = '';
//     for(var i = 0; i < coffees.length; i++) {
//         html += renderCoffee(coffees[i]);
//     }
//     return html;
// }