"use strict";


//Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
//For example, showMultiplicationTable(7) should output
//
//
// function showMultiplicationTable(num) {
//     for (var i = 1; i <= 10; i++) {
//         console.log(+num +" x " +i +" = "  +(i * num));
//         }
// }
// showMultiplicationTable(10);

//Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:

// var randomNumber = Math.floor(Math.random() * 180) + 20;
// console.log(randomNumber);

for (var i = 0; i < 10; i++) {
var randomNumber = Math.floor(Math.random() * 180) + 20;
console.log(randomNumber);

    if (randomNumber % 2 === 0){
        console.log("Number is even.")
    } else {
        console.log("Number is odd.")
    }
}

// if (evenOddPositiveNegative % 2 === 0){
//     console.log("The number is even");
//     alert("The number is even.");
// } else {
//     console.log("The number is odd");
//     alert("The number is odd.");
// }



// var i = 0
// while (i <= 10){
//     console.log("Currently the variable I is : " +i);
//     i++;
// }

//
// for (i = 1; i <= 10; i++) {
//     console.log("Howdy our current number is: " + num);

// - incrementer initialization - Here we are declaring the variable for our incrementer, as well as its value.

// - condition - The loop will continue to run until this condition is no longer true.

// - incrementer change - what happens to the incrementer in once the loop has finished executing the code for a given iteration.