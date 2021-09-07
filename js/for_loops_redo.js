'use strict';

// for (var i = 1; i < 100; i++) {
//
//     if (i % 2 !== 0) {
//         // number isn't even
//         // odd numbers aren't as cool
//         // skip the rest of the loop and continue with the next iteration
//         continue;
//     }
//
//     console.log('Here is a lovely even number: ' + i);
// }

// function showMultiplicationTable(input){
//     for (var i = 1; i <= 10; i++){
//         console.log(input +" x "+ i +" = " +(input*i));
//     }
// }
// showMultiplicationTable(6)


// 123 is odd
// 80 is even
// 24 is even
// 199 is odd
// ...

//var random = Math.floor(Math.random() * 200) + 20;
// function randomNum(random){
// var random = Math.floor(Math.random() * 200) + 20;
//     for (var i = 1; i < 10; i++) {
//         if (random % 2 !== 0 && random >= 21){
//             console.log(random+  " is a ODD number.");
//         } else
//             console.log(random+  " is an even number.");
//         //}
//         //console.log(random);
//     }
// }
// randomNum();

//Create a for loop that uses console.log to create the output shown below.
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

//Create a function called 'isTwo' that takes a number as a parameter.
//  * The function should return a boolean value based on whether or not the passed
//  * number is the number 2.
//  *
//  * Example
//  * > isTwo(1) // returns false
//  * > isTwo(2) // returns true
//  * > isTwo(3) // returns false
//  *
//  * Call the function 'isTwo' passing the variable 'random' as a argument.

function isTwo(){
var random = Math.floor((Math.random() * 3) + 1);
    return random === 2;
}
isTwo();