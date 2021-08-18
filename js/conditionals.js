// "use strict";
//
// /* ########################################################################## */
//
// /**
//  * TODO:
//  * Create a function named `analyzeColor` that accepts a string that is a color
//  * name as input. This function should return a message that related to that
//  * color. Only worry about the colors defined below, if the color passed is not
//  * one of the ones defined below, return a message that says so
//  *
//  * Example:
//  *  > analyzeColor('blue') // returns "blue is the color of the sky"
//  *  > analyzeColor('red') // returns "Strawberries are red"
//  *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
//  *
//  * You should use an if-else-if-else block to return different messages.
//  *
//  * Test your function by passing various string literals to it and
//  * console.logging the function's return value
//  */
//
// function analyzeColor() {
//     var userInputColor = prompt("What color is the sky?")
//     userInputColor = userInputColor.toLowerCase();
//
//     if (userInputColor === "blue") {
//         alert("You right, " + userInputColor + " is the color of the sky");
//     } else {
//         alert("You got me brah, I am not too familiar with " + userInputColor + ".")
//     }
//     var userInputRed = prompt("What color is apple?")
//     userInputRed = userInputRed.toLowerCase();
//     if (userInputRed === "red") {
//         alert("You right again, brah");
//     } else {
//         alert("Don't know that color.")
//     }
// }
//
// analyzeColor()
//
//
// // Don't change the next two lines!
// // These lines create two variables for you:
// // - `colors`: a list of the colors of the rainbow
// // - `randomColor`: contains a single random color value from the list (this
// //                  will contain a different color every time the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
// /**
//  * TODO:
//  * Pass the `randomColor` variable to your function and console.log the results.
//  * You should see a different message every time you refresh the page
//  */
//
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
//
// function randomColor (){
//     if (colors === randomColor);
// }
//
// console.log(randomColor)
//
//
// /**
//  * TODO:
//  * Refactor your above function to use a switch-case statement
//  */
//
//
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
//
// switch (randomColor) {
//     case "colors === randomColor":
//     break;
// }
//
// console.log(randomColor)
//
//
// /**
//  * TODO:
//  * Prompt the user for a color when the page loads, and pass the input from the
//  * user to your `analyzeColor` function. Alert the return value from your
//  * function to show it to the user.
//  */
//
// var userInputColor = prompt("Pick a color, any color!")
//
// switch (analyzeColor) {
//     case alert("I knew you'd choose: " +userInputColor+ "!"):
//     break;
// }
//
//
// /* ########################################################################## */
//
// /**
//  * TODO:
//  * Suppose there's a promotion in Walmart, each customer is given a randomly
//  * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
//  * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
//  * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
//  * all for free!.
//  *
//  * Write a function named `calculateTotal` that accepts a lucky number and total
//  * amount, and returns the discounted price.
//  *
//  * Example:
//  * calculateTotal(0, 100) // returns 100
//  * calculateTotal(4, 100) // returns 50
//  * calculateTotal(5, 100) // returns 0
//  *
//  * Test your function by passing it various values and checking for the expected
//  * return value.
//  */
// 0 = no discount
// 1 = 10% discount
// 2 = 25% discount
// 3 = 35% discount
// 4 = 50%
// 5 = Free


//var randomNumber = Math.floor(Math.random() * 6);
//prompt("Your random number is: " + allRandomNumbers + " .");


//var total = (randomNumbers * totalCost);

//var total = alert ("Your total is: " +total+ " .");



function calculateTool() {

    var numbers = ['0', '1', '2', '3', '4', '5'];
    var randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
 //   alert("Your lucky number is: " +randomNumber+ " .");  THIS MIGHT BE USED FOR NEXT PROBLEM
    var totalCost = prompt("How much is your total for today's purchases?");



    if (randomNumber === '0') {
        alert("Sorry no discount");
    } else if (randomNumber === '1') {
        alert("Your total is: $" +(totalCost - (.10 * totalCost))+ " .");
    } else if (randomNumber === '2') {
        alert("Your total is: $" +(totalCost - (.25 * totalCost))+ " .");
    } else if (randomNumber === '3') {
        alert("Your total is: $" +(totalCost - (.35 * totalCost))+ " .");
    } else if (randomNumber === '4') {
        alert("Your total is: $" +(totalCost - (.50 * totalCost))+ " .");
    } else if (randomNumber === '5') {
        alert("Your total is: $" +(0)+ " .");
    }

    console.log(randomNumber);
    console.log(totalCost);

}
calculateTool();

//switch (calculateTotal){
  //  case totalCost:
    //break;
    //case alert ("Your lucky number is: " +randomNumber+ " ."):
    //break;
    //case prompt("What is your total?"):
    //break;
//}
//console.log(calculateTotal);



/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */