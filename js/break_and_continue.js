// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
//     Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
//     Your output should look like this:

// var userInputNumber = prompt("Enter a ODD number between 1-50:")
// function allOddNumbersToX (x) {
//         if (userInputNumber > 50) {
//             prompt("Enter an ODD number between 1-50:")
//
//     for (var i = 0; i <= 50; i++) {
//         if (i % 2 === 0) {
//
//             continue;
//         // if (i == userInputNumber);
//            // console.log("Here is  an odd number: " +i);
//
//         } else if (i == userInputNumber)
//             break;
//             console.log("Here is an odd number: " +i);
// //        else if (i == userInputNumber);
//             continue;
//         } else if (i == userInputNumber)
//
//         console.log("Skipping number: " + i);
//
//        // console.log("Here is  an odd number: " +i);
//         //return console.log(userInputNumber);
//
// }
//
// allOddNumbersToX(userInputNumber);


var userInputNumber = prompt("Enter a ODD number between 1-50:")
//var numberToStopAt = userInputNumber;

function allOdds(){
    for (var i = 0; i <=50; i++) {
        if (i % 2 !== 0) {
            console.log('Odd number is: ' + i);
        }else if (i === userInputNumber) {
                console.log('You got: ' + userInputNumber)
                // console.log('We have reached the stopping point: break!');
                // // use the break keyword to exit from the while loop
                break;
                // nothing after the break will get processed
                console.log('You will never see this.');
            }
        }
    }


allOdds();

// var userInputNumber = prompt("Enter a ODD number between 1-50:")
// function oddNumbers() {
//     if (userInputNumber > 50) {
//         prompt("Renter an ODD number between 1-50:")
//     }
//     for (var i = 1; i<= 50; i++) {
//         if (i % 2 === 0)
//             console.log("Here is  an odd number: " + i);
//
//         else if (i == userInputNumber)
//             console.log("Skipping number: " + userInputNumber);

       // continue;
     //       console.log("Number Odd: " + i);
            //} else {
   //         console.log("Skipping number: " + userInputNumber);
            //}
 //       }
//        return "Hello!";
//     }
// }
// oddNumbers();




// for (var i = 1; i < 25; i++){
//     if (i % 6 == 0) console.log("Codeup");
//     else if (i % 2 == 0) console.log("Code");
//     else if (i % 3 == 0) console.log("Up");
//     else console.log(i);
// }
