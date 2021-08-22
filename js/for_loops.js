"use strict";


//Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
//For example, showMultiplicationTable(7) should output
//

function showMultiplicationTable(num) {
    for (var i = 1; i <= 10; i++) {
        console.log(+num +" x " +i +" = "  +(i * num));
        }
}
showMultiplicationTable(10);

//Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:

var randomNumber = Math.floor(Math.random() * 180) + 20;
console.log(randomNumber);

for (var i = 0; i < 10; i++) {
var randomNumber = Math.floor(Math.random() * 180) + 20;
console.log(randomNumber);

    if (randomNumber % 2 === 0){
        console.log("Number is even.")
    } else {
        console.log("Number is odd.")
    }
}


//Create a for loop that uses console.log to create the output shown below.
//
// var numberStopA = 1;
// var numberStopB = 22;
// var numberStopC = 333;
// var numberStopD = 4444;
// var numberStopE = 55555;
// var numberStopF = 666666;
// var numberStopG = 7777777;
// var numberStopH = 88888888;
// var numberStopZ = 999999999;
//
//
// function numberPyramid() {
// //      for (var i = 1, b = 2; i > 1, b < 10; i++, b++) {
// //      for (var i = 1; i < 10; i++) {
// //        var totalNumberOfRows = 9;
//         var output = '';
//         for (var i = 1; i <= 9; i++) {
//                 for (var j = 1; j <= i; j++) {
//                         output += j + '  ';
//                 }
//                 console.log(output);
//                 output = '';
//         }
//
// numberPyramid();


//        console.log(+i, b);
//        console.log(numberStopB , +numberStopC);
//        if (i === numberStopZ) {
//           break;
//       }
//      for (var b = 2; b < 10; b++) {
//        console.log(b);
//      }
//    }
//}

//for (var i = 0, j = 9; i < 10; i++, j--) {
//     console.log('for loop iteration #' + i + ', j = ' + j);
// }



// var numberToStopAt = 5;
//
// for (var i = 1; i < 100; i++) {
//
//     console.log('Loop counter is: ' + i);
//
//     if (i === numberToStopAt) {
//         console.log('We have reached the stopping point: break!');
//         // use the break keyword to exit from the while loop
//         break;
//         // nothing after the break will get processed
//         console.log('You will never see this line.');
//     }
// }

//Create a for loop that uses console.log to create the output shown below.
        for (var i = 0; i < 20; i++) {
                //       for (var j = 1; j <= i; j++) {
                console.log((i * -5) + 100);
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