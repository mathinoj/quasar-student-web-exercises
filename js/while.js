"use strict";

function timesTwo() {
    var num = 2;

    while (num <= 65536) {
        num *= 2;
        console.log(num);
    }
}
timesTwo();


//Do While Loop
// An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. This is a way get the random numbers for this exercise.
//
//
// // This is how you get a random number between 50 and 100
// var allCones = Math.floor(Math.random() * 50) + 50;
// // This expression will generate a random number between 1 and 5
// Math.floor(Math.random() * 5) + 1;
// The output should be similar to the following:
//
// 5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
// Yay! I sold them all! // If there are no more cones

//use all cones to determine how many number of cones needed to sell
//loop 1 (allCones 50-100) = the amount of cones to sell before starting loop
//loop 2 (randomNum 1-5) = amount of cones to be bought by clients
//use DO-WHILE loop to log to the console the amount of cones sold to each person
// var allCones = Math.floor(Math.random() * 50) + 50;
// var conesToSell = allCones
// console.log(conesToSell);
//        console.log("You have this many cones to sell: " +allCones+ " ,and a customer bought this many cones: " +conesSold+ ". You need to sell " +totalCones+ " before you go home.")

function cones() {
    var allCones = Math.floor(Math.random() * 50) + 50;
    console.log(allCones)
    var conesSold = Math.floor(Math.random() * 5) + 1
    var totalCones = 100 - (allCones + conesSold)
    var onlyConesLeft = (allCones + conesSold) - 100
    do {
        console.log("A customer bought this many cones: " + conesSold);
    } while (totalCones >= 100);
    if (totalCones === 0) {
        console.log("Yay I sold them all")
    } else if ((allCones + conesSold) < 100) {
        console.log("You need to sell " + totalCones);
    } else {
        console.log("I can't sell you " + conesSold + " cuz I only have " +onlyConesLeft+ " left to sell.")
    }
}
cones();
