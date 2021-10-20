'use strict'
console.log('Hello restful APIs')

const API_URL = 'https://vagabond-glacier-verse.glitch.me/dogs';

function getDogs(){
    return fetch(API_URL)
        .then((response)=>response.json())
}
getDogs().then((dogs)=>console.log(dogs))

function getDog(id){
    return fetch(`${API_URL}/${id}`)
        .then((response)=>response.json())
}

// getDog(11).then((dog)=>console.log(dog))
// THIS GETS ONE DOG AND WE CHOSE NUMBER BY THE DOGS 'ID' NUMBER. WE TESTED THE NUMBER IN THE BROWSER FOR THE URL.

//EDIT A DOG BY ID
function editDog(dog){     //REMEMBER THAT {} IS AN OBJECT
    let options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dog)
    }
    return fetch(`${API_URL}/${dog.id}`, options)
        .then((response)=>response.json())
}

// let piper = {
//     name: 'Piper',
//     isGoodDog: true,
//     id: 11,
//     age: 8
// };
// editDog(piper).then((data)=>console.log(data))

//DELETE DOG BY ID
function deleteDawg(id){
    let options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    fetch(`${API_URL}/${id}`, options)
        // .then((response)=>console.log('Deleted dog by id' + id, response))
        .then((response)=>response.json())
}


// THIS ADDS DOG
function createDawg(id){
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dog) // convert the JS object into a JSON string before sendig it up to the server
    }
    return fetch(API_URL, options)
        // .then((response)=>console.log('Deleted dog by id' + id, response))
        .then((response)=>response.json())
}

let woody = {
    name: 'Woody',
    isGoodDog: true,
    age: 7
};

createDawg(woody).then((createDawg)=>console.log(createDawg));




