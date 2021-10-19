"use strict";
console.log("A promise lecture");

/*********************************************
 *        USING FETCH WITH PROMISES
 ******************************************** */

// var pokemonAPI = fetch('https://pokeapi.co/api/v2/pokemon');
// return of fetch request is a Promise object

//TODO: console log the results of the above Promise. What is the result?
// console.log(pokemonAPI);

//TODO: add a method that runs if the Promise resolves successfully

//TODO: add a method that runs if the Promise fails

//TODO: In the callback function of the .then method, parse the response into JSON
// pokemonAPI.then(function (results){
//     console.log(results);
// }) //JUST ALL THIS GIVE BACK A 'RESPONSE' IN THE CONSOLE


// pokemonAPI.then(function (results){
//     console.log(results);
//     // results.text().then((text)=>(console.log(text))); //this brings up a lot of text all jumbled on same console which looks disorganized
//     results.json().then((resultsObject)=> console.log(resultsObject)); //unlike the one above, this brings up organized data
// }).catch(function (err){
//     console.log('err', err);
// })

/*********************************************
 *              CHAINING PROMISES
 ******************************************** */

// TODO: Using Promise chaining, add another .then method that returns the results property of
//  the first returned response.
//    Taking a look at this second return, what are the results? What is the shape of our data?

// TODO: Finally, chain another .then method that would log all of the name properties of the
//  returned pokemon.

// fetch('https://pokeapi.co/api/v2/pokemon')
//     .then(function(results){
//         console.log(results);
//     results.json()
//     .then((resultsObj)=>{return resultsObj.results})
//     .then((pokemon)=>console.log(pokemon[0]));
//     }) .catch(function(err){
//         console.log('err', err);
// })

// BELOW IS A CLEANER VERSION WHEN COMPARED TO THE ONE ABOVE
// fetch('https://pokeapi.co/api/v2/pokemon')
//     .then((response)=>response.json())
//     .then((jsonData)=>jsonData.results)
//     // .then((results)=>console.log(results))
//     .then((results)=>results.forEach((result)=>console.log(result.name)));


// BONUS: Is there a way for us to clean up our code?

// Let's try working with the Star Wars API!

// TODO: Using Promises, make a fetch request to the Star Wars API
fetch('https://swapi.dev/api/films')
// TODO: Use Promise chaining to console log the json response

    .then((response)=>{
        return response.json();
        // console.log(response.json());
    }).then((starWarsFilmData)=>{  //From ((starWars... to the '}' below the console is the callback.
    // jsonData is the parsed object from the call to response.json.
    // WHAT IS PARSED:
    // parseInt: attempts to convert a string to an integer value THIS AND THE ONE BELOW ARE FOR JS CONVERT STRING TO NUMBERS, I THINK
    // parseFloat: attempts to convert a string to a floating point (i.e. decimal) value
    // The JSON.parse() method parses a string and returns a JavaScript object.
    // The string has to be written in JSON format.
    // The JSON.parse() method can optionally transform the result with a function.
        console.log(starWarsFilmData.results);
        starWarsFilmData.results.forEach((film)=>{console.log(film.title)})
})

// .forEach(function(film){
//     console.log(film.title)
// })
//THIS IS HOW YOU WOULD WRITE OUT THE FOR EACH FUNCTION WITHOUT THE ARROW!!


// TODO: chain another method that iterates through the results array and console logs the names

// TODO: Demonstrate Promise.all and Promise.race
var pokemonAPI = fetch('https://pokeapi.co/api/v2/pokemon');
let starWarsAPI = fetch('https://swapi.dev/api/films')

Promise.all([pokemonAPI, starWarsAPI])
    .then((responses) => {
        //Responses contains the resolved promises in the same order that they were passed into the all method.
        //YOU DONT HAVE TO DO THIS (THE ONE BELOW THIS LINE)
        // console.log(responses[0].json().then((parsedData)=>{console.log(parsedData)}))
        return Promise.all(
            responses.map((response) => {
                    return response.json()
                }
            ))
    }).then((parsedResults)=>{
    console.log(parsedResults);
});

// Promise.race([pokemonAPI, starWarsAPI])
// .then((response)=>{console.log(response)})
//THE POKEMONAPI IS COMING UP FIRST CUZ IT RESPONDS FASTER