//
////function named tellFortune
// //takes in 4 arguments: number of kids, partners name, location, job title
// //outputs fortune like "You will be an X in Y, and married to Z with N kids."
// //call function 3 times with 3 different values

//
// function tellFortune([numberOfKids, partnersName, location, job]){
// // var partnersName = ["Sara", "Josh", "Rachel", "Alex"];
// // var location = ['Texas', 'Iowa', 'Idaho', 'Maine'];
// // var job = ['Plumber', 'Teacher', 'Engineer', 'Athlete']
// // var numberOfKids = ['0', '1', '2', '3'];
//
//
//     var output = "You will be an " +job+ " in " +location+ " and married to " +partnersName+ " with " +numberOfKids+ " kids.";
//     return output;
// }
//send this to console to view
//questions says to call the function. The sentence above this is calling it in the console.


//// Returns a random integer between min and max.
// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

//var output = "You will have " +numberOfKids+ " children"
//console.log(output);
//return output;


// function dogsAge(input1, input2){
//     var output = "Your dogs age is " +(input1 * 7)+ " old in dog years. If your dog is " +(input1 * 7)+ " years old, then you are " +input2 % 7+ " years old."
//     return output;
// }

// function dogsAge(input1, input2){
//     return "Your dogs age is " +(input1 * 7)+ " old in dog years. If your dog is " +(input1 * 7)+ " years old, then you are " +input2 % 7+ " years old.";
// }

//var ageInHumanYears = dogAge * conversion (inputs dogAge, conversion)

//human age would have to be

// SEPTEMBER 14 MORNING WARMUP EXERCISE
// Given arrays of strings that are orders of food in string form to your function, write a function named tacoTuesday that returns TRUE or FALSE if the array provided has any element mention the word ‘taco’ in its value.
//     var hasTacos = [“blueberry muffin”, “banana”, “yogurt”, “cereal”, “brisket and egg taco”]
// var noTacos = [“parfait”, “omlette de frumage”, “protein shake”, “fasting”]
// tacoTuesday(hasTacos) //true
// tacoTuesday(noTacos) //false


// function tacoTuesday (input){
//     const includesTaco = array.includes("taco");
//
//     // var input = ["taco"];
//     // if (input === ["taco"]){
//     if (input === includesTaco){
//         return true;
//     }
//     console.log(tacoTuesday());
// }
// tacoTuesday();

function tacoTuesday (arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i].includes("taco")){
            return true;
        }
    }
    return false;
}
// USE STRING.INLCLUDES()
// TO TEST THIS FUNCTION JUST COPY AND PASTE INTO BROWSER CONSOLE. THEN DO "TACOTUESDAY('')"



// var fish1 = { type: "channel catfish", sizeInches: 18, locationCaught: "Lions Park", color: "blue"};
// var fish2 = { type: "channel catfish", sizeInches: 19, locationCaught: "Lions Park", color: "blue"};
// var fish3 = { type: "redfish", sizeInches: 22, locationCaught: "Braunig Lake", color: "red"};
// var fish4 = { type: "redfish", sizeInches: 29, locationCaught: "Braunig Lake", color: "red"}
// var kensCatch = [fish1, fish2, fish3, fish4]
// Also, well, I caught these - don't ask me where
var sewerFish1 = { type: "tropical and unknown", sizeInches: 6, locationCaught: "sewer", color: "green"}
var sewerFish2 = { type: "tropical and unknown", sizeInches: 3, locationCaught: "sewer", color: "blue"}
var strangeCatch = [sewerFish1, sewerFish2]
// Bad news - I need some help with knowing what all I caught
// Write a function named fishingWeekend that takes in an array of fish objects
// fishingWeekend() will alert me with three seperate alerts from that array of fish objects
// 1. First, program an alert letting me know if I caught a red fish, blue fish, both, or neither in my catch [my array]
// 2. Second, an alert letting me know the average sizes of the total number of fish I caught [“That totals up to 4 fish with an average length of 22 inches.“]
// 3. An alert letting me know if I got any catfish [“You caught some catfish tonight!“
// HINT: Do NOT try to do all of these in one go
//  Write your function out incrementally, one alert at a time, piece by piece to eventually combine into the larger function desired.
function fishingWeekend(arr) {
    var fish1 = {type: "channel catfish", sizeInches: 18, locationCaught: "Lions Park", color: "blue"};
    var fish2 = {type: "channel catfish", sizeInches: 19, locationCaught: "Lions Park", color: "blue"};
    var fish3 = {type: "redfish", sizeInches: 22, locationCaught: "Braunig Lake", color: "red"};
    var fish4 = {type: "redfish", sizeInches: 29, locationCaught: "Braunig Lake", color: "red"}
    var kensCatch = [fish1, fish2, fish3, fish4]
    // var randomItem = kensCatch[Math.floor(Math.random()*kensCatch.length)];
    let fish = kensCatch[Math.floor(Math.random() * kensCatch.length)]
    console.log(fish)

    for (var i = 0; i < kensCatch.length; i++) {
        if (kensCatch[i].includes("red" || "blue")){
            // return alert("You caught " +kensCatch
            return true
        } else if ((kensCatch[i].includes("red" && "blue"))) {
            return alert("Now you got " +kensCatch)
        } else {
            return false;
        }
    }
    alert("you got " +kensCatch)
}



// if(arr[i].includes("taco")){
//     return true;

// || (kensCatch[i].includes("red" && "blue"))