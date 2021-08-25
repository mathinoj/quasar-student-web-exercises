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

//function (randomNumberOddsEven(){
//     for(var i = 0; i < 10; i++)
//         var randNum = Math.floor etc.
//     var oddOrEven = randNum % 2 == 0 ? "even" : "odd";
//     console.log(randNum + " is " + oddOrEven);
//      }
// }

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

function showMultiplicationTable(num) {
 */


//Create a for loop that uses console.log to create the output shown below.
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5

function reduceByFive(num){
    for (num; num>= 5; num--){
        if(num % 5 === 0) {
            console.log(num);
        }
    }
}

reduceByFive(100);

