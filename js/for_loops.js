"use strict";


//Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
//For example, showMultiplicationTable(7) should output
//
//
function showMultiplicationTable(num) {
    for (var i = 1; i <= 10; i++) {
        console.log(+num +" x " +i +" = "  +(i * num));
        }
}
showMultiplicationTable(10);




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