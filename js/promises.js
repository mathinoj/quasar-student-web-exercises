'use strict'

// Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made. Reference the github api documentation to achieve this.

//Create function that accepts a GitHub username (MATHINOJ)
//The function returns a promise
//The promise resolves returning just the DATE-of-LAST-COMMIT that user made (MATHINOJ)


var url = 'https://api.github.com/users/tater/events'
console.log(url);

fetch(url, {headers: {'Authorization': gitHubAPIKey}})


// fetch('https://api.github.com/users/mathinoj/events')
// fetch(url, {headers: {'Authorization': gitHubAPIKey}})
// fetch(url)
//     .then(function(results){
//         console.log(results);
//         results.json()
//             .then((resultsObj)=>{return resultsObj.results})
//             .then((mathi)=>console.log(mathi[0]));
//     }) .catch(function(err){
//         console.log('err', err)
// })

// .then((response)=>{
//     return response.json();
// }).then((mathinojData)=>{
//     console.log(mathinojData);
//     // mathinojData.results.forEach(()=>{console.log(blank.blank)})
// })

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//
var myOwnAPI = fetch('https://api.github.com/users/mathinoj/events');

fetch('https://api.github.com/users/mathinoj/events')
    .then((response) => {
        console.log(response.json())
        myOwnAPI.then(function (result) {
            console.log(result);
            result.json().then((resultsObject) => console.log(resultsObject));
        }).then((mathinojData) => {
            console.log(mathinojData.results);
            mathinojData.results.forEach((commit)=>{console.log(commit.actor)
            })
        })
    })
//



// const headers={
//     // Accept: 'application/vnd.github.v3+json',
//     Accept: 'application/vnd.github.v3+json',
// };
//
// function dateOfCommit(username){
//     return fetch('https://api.github.com/users/mathinoj/events', {
//         headers,
//     }).then((eventRes)=>{
//         console.log('Event JSON', eventJson);
//         if(!eventRes.ok) throw eventJson;
//
//         const lastPush = eventJson.find((event)=> event.type === 'PushEvent');
//
//         if(!lastPush) throw 'Could not find last commit.'
//         return new Date(lastPush.created_at);
//     })
// }



// const coolPeeps





// fetch('https://api.github.com/users/mathinoj/events')
//     .then((response)=>response.json())
//     .then((jsonData)=>jsonData.results)
//     .then((results)=>console.log(results))
//     .then((results)=>results.forEach((result)=>console.log(result.name)));
// fetch('https://pokeapi.co/api/v2/pokemon')

// fetch('https://api.github.com/users/mathinoj/events')
//     .then(function(results){
//         console.log(results);
//         results.json()
//             .then((resultsObj)=>{return resultsObj.results})
//             .then((mathi)=>console.log(mathi[0]));
//     }) .catch(function(err){
//         console.log('err', err)
// })

// fetch('https://api.github.com/users/mathinoj/events')
//     .then((response)=>{
//         return response.json();
//         // console.log(response.json());
//     }).then((myData)=>{  //From ((starWars... to the '}' below the console is the callback.
//         console.log(myData.results);
//
//     myData.results.forEach(film)
//         console.log(film.actor)
//
// })

// .forEach(function(film){
//     console.log(film.title)
// })

// //     results.json().then((resultsObject)=> console.log(resultsObject)); //unlike the one above, this brings up organized data

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


// fetch('https://api.github.com/users/mathinoj/events')
//     .then((response)=>{
//         console.log(response.json())
//     }).then((myData)=>{
//         console.log(myData.results);
//         // myData.results.forEach((blah)=>{console.log(blah.actor)})
// })

//     .then((response)=>{
//         return response.json();
//         // console.log(response.json());
//     }).then((starWarsFilmData)=>{  //From ((starWars... to the '}' below the console is the callback.
//         console.log(starWarsFilmData.results);
//         starWarsFilmData.results.forEach((film)=>{console.log(film.title)})
// })