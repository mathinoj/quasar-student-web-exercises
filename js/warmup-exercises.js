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

// function tacoTuesday (arr){
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i].includes("taco")){
//             return true;
//         }
//     }
//     return false;
// }
// USE STRING.INLCLUDES()
// TO TEST THIS FUNCTION JUST COPY AND PASTE INTO BROWSER CONSOLE. THEN DO "TACOTUESDAY('')"



// var fish1 = { type: "channel catfish", sizeInches: 18, locationCaught: "Lions Park", color: "blue"};
// var fish2 = { type: "channel catfish", sizeInches: 19, locationCaught: "Lions Park", color: "blue"};
// var fish3 = { type: "redfish", sizeInches: 22, locationCaught: "Braunig Lake", color: "red"};
// var fish4 = { type: "redfish", sizeInches: 29, locationCaught: "Braunig Lake", color: "red"}
// var kensCatch = [fish1, fish2, fish3, fish4]
// Also, well, I caught these - don't ask me where
// var sewerFish1 = { type: "tropical and unknown", sizeInches: 6, locationCaught: "sewer", color: "green"}
// var sewerFish2 = { type: "tropical and unknown", sizeInches: 3, locationCaught: "sewer", color: "blue"}
// var strangeCatch = [sewerFish1, sewerFish2]
// Bad news - I need some help with knowing what all I caught
// Write a function named fishingWeekend that takes in an array of fish objects
// fishingWeekend() will alert me with three seperate alerts from that array of fish objects
// 1. First, program an alert letting me know if I caught a red fish, blue fish, both, or neither in my catch [my array]
// 2. Second, an alert letting me know the average sizes of the total number of fish I caught [“That totals up to 4 fish with an average length of 22 inches.“]
// 3. An alert letting me know if I got any catfish [“You caught some catfish tonight!“
// HINT: Do NOT try to do all of these in one go
//  Write your function out incrementally, one alert at a time, piece by piece to eventually combine into the larger function desired.
// function fishingWeekend(arr) {
//     var fish1 = {type: "channel catfish", sizeInches: 18, locationCaught: "Lions Park", color: "blue"};
//     var fish2 = {type: "channel catfish", sizeInches: 19, locationCaught: "Lions Park", color: "blue"};
//     var fish3 = {type: "redfish", sizeInches: 22, locationCaught: "Braunig Lake", color: "red"};
//     var fish4 = {type: "redfish", sizeInches: 29, locationCaught: "Braunig Lake", color: "red"}
//     var kensCatch = [fish1, fish2, fish3, fish4]
//     // var randomItem = kensCatch[Math.floor(Math.random()*kensCatch.length)];
//     let fish = kensCatch[Math.floor(Math.random() * kensCatch.length)]
//     console.log(fish)
//
//     for (var i = 0; i < kensCatch.length; i++) {
//         if (kensCatch[i].includes("red" || "blue")){
//             // return alert("You caught " +kensCatch
//             return true
//         } else if ((kensCatch[i].includes("red" && "blue"))) {
//             return alert("Now you got " +kensCatch)
//         } else {
//             return false;
//         }
//     }
//     alert("you got " +kensCatch)
// }
//


// if(arr[i].includes("taco")){
//     return true;

// || (kensCatch[i].includes("red" && "blue"))

// TODO: Finish coding this program. You need to stop the setInterval() method after the showTime() function has run five times
// let count = 0;
// function showTime() {
//     // return new date and time
//     let dateTime = new Date();
//     // return the time
//     let time = dateTime.toLocaleTimeString();
//     count += 1;
//     //if the count reaches 5, stop the program.
//     if (count >= 3){
//         console.log("Lst timestamp.")
//         clearInterval(display);
//     }
//     console.log(time)
// }
// let display = setInterval(showTime, 9000);

// function greet(){
//     console.log("YO");
// }
// setTimeout(greet, 2000);
// or window.setTimeout(greet, 2000);

// function greet(){
//     console.log("YO");
// }
// var delayedGreeting = setTimeout(greet, 2000);
//
// window.clearTimeout(delayedGreeting);
// or clearTimeout(delayedGreeting)

'use strict';

// function logEvens (num) {
//     for (var i = 1; i < 100; i++) {
//         if (i % 2 !== 0){
//          return num;
//         // } else {
//         //     alert("input even number");
//         }
//     }
//     console.log("even number here " +i)
// }


// function logEvens (num) {
//     for (var i = 0; i <= num; i++) {
//         if (i % 2 === 0){
//             console.log("even number here " +i);
//         }
//     }
// }
//
// function logOdds(num){
//     for (var i = 0; i <= num; i++){
//         if (i % 2 !== 0){
//             console.log("odd number here " +i);
//         }
//     }
// }

// function logNum (num){
//     for (var i = 1; i <= num; i++) {
//         if (i % 2 !== 0){
//             console.log(+i + " is an odd number.");
//         } else {
//             console.log(+i + " is an even number.")
//         }
//     }
// }

// Get Sum of People's Budget
// Create the function named getBudgets that takes an array with objects and returns the sum of people's budgets.

// Examples
// getBudgets([
//     {name: "John", age: 21, budget: 23000},
//     {name: "Steve", age: 32, budget: 40000},
//     {name: "Martin", age: 16, budget: 2700}
// ])
//65700
// getBudgets([
//     {name: "John", age: 21, budget: 29000},
//     {name: "Steve", age: 32, budget: 32000},
//     {name: "Martin", age: 16, budget: 1600}
// ])
//62600


// function gotBudgets(arr){
//     var arrayBud = [
//         {name: "John", age: 21, budget: 23000},
//         {name: "Steve", age: 32, budget: 40000},
//         {name: "Martin", age: 16, budget: 2700}
//     ]
// var total = 0
// var what = arrayBud.indexOf()
// console.log(what);
// //
// // console.log(arrayBud);
// // console.log(arrayBud.length);
//
// arrayBud.forEach(function (budgets){
//     for (var i=2; i < arrayBud.length; i++){
//         console.log(arrayBud);
//         alert('The budget is: ' + (total+=budgets));
//         }
// })
// marks.forEach(function(element, index){
//     total+=element;
// });

//     var shoppers = [
//         {name: 'Cameron', amount: 180},
//         {name: 'Ryan', amount: 250},
//         {name: 'George', amount: 320}
//     ];
//
// shoppers.forEach(function (shopper) {
//     //console.log(shopper.name+ " spent $" +shopper.amount)
//     //var qualify = (shopper.amount > 200)
//     var discount = (shopper.amount * .12)
//     if (shopper.amount > 200) {
//         console.log(shopper.name + " qualifies for a discount.")
//     } else {
//         console.log(shopper.name + "'s current amount is $" + shopper.amount + ". " + shopper.name + " does not qualify for a discount.")
//         console.log("If " + shopper.name + " spends $" + (201 - shopper.amount) + " more, the shopper will receive a 12% discount.")
//     }
//     if (shopper.amount > 200) {
//         console.log(shopper.name + "'s current amount is: $" + shopper.amount + ". Their new amount is: $" + (shopper.amount - discount))
//     }
// })







// var index = arrayBud.indexOf('budget');
// console.log(index);

// var index = arrayBud.indexOf('budget');
// console.log(index);
// console.log(arrayBud[0])
// console.log(arrayBud[1])
// console.log(arrayBud[2])



// console.log(arrayBud[arrayBud.length - 1])

    // for (var i=0; i < arrayBud.length; i++){
    //     console.log(arrayBud);
    //     alert('The shape at index ' + i + ' is: ' + array[i]);
    //     if(array[i].includes('budget')){
    //         alert("Your total is " +array.budget);
    //         console.log(budget);
    //     }
    // }
    // var sum = null;
    //
    // array.forEach(function(value){
    //     console.log(sum += value.budget);
    // });
// }
// console.log(gotBudgets)

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

// function tacoTuesday (arr){
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i].includes("taco")){
//             return true;
//         }
//     }
//     return false;
// }

// console.log(gotBudgets(arr))

// var sum = array.reduce(function(a, b){
//     return a + b;
// }, 0);
//
// for (var i = 0; i < kensCatch.length; i++) {
//         if (kensCatch[i].includes("red" || "blue")){
//             // return alert("You caught " +kensCatch
//             return true
//         } else if ((kensCatch[i].includes("red" && "blue"))) {
//             return alert("Now you got " +kensCatch)
//         } else {
//             return false;
//         }
//     }

// Find the Smallest and Biggest Numbers
//  Create a function named minMax that takes an array of numbers and return both the minimum and maximum numbers, in that order.
//
//  Examples
//   minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
//   minMax([2334454, 5]) ➞ [5, 2334454]
//   minMax([1]) ➞ [1, 1]
//
//  Notes All test arrays will have at least one element and are valid




// function big(){
//     var firstNums = ([1, 2, 3, 4, 5])
//
//     Math.max(firstNums);
//     console.log(max);
// }

// var largest = firstNums[0];

// function minMax(arr) {

// for (var i = 0; i < firstNums.length; i++) {
//     if (largest < firstNums[i]) {
//         largest = firstNums[i];
//     }
// }
// // }
// console.log(largest);

// var array = [3 , 6, 2, 56, 32, 5, 89, 32];
// var largest= 0;
//
// for (i=0; i<=largest;i++){
//     if (array>largest) {
//         var largest=array[i];
//     }
// }
//
// console.log(largest)

// firstNums.forEach(function (nums){
//     for (var i=0; i < firstNums.length; i++) {
//         console.log(firstNums);
//         if (largest < firstNums[i]) {
//             largest = firstNums[i];
//             alert('The budget is: ' +nums);
//         }
//     }
// })

var sale = ([
    {name: 'Jim Halpert', sales: 100},
    {name: 'Dwight Schrute', sales: 50},
    {name: 'Andy Bernard', sales: 150},
])

function averageSales(arr){
    // var num = sale.sales.length;
    var num = 0;
    sale.forEach(function (some){
        num += some
    })
        // return (num += sale.length)
        console.log(arr)
        console.log(averageSales)

    return (num/arr.length)
    // arr.forEach(function (value){
    // return (num /= value.sales)

}

// function average(arr){
//     var num = 0;
//     arr.forEach(function (blah){
//         num += blah
//     });
//     return (num/arr.length);
// }