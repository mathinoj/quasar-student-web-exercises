// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
//     Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
//     Your output should look like this:
'use strict';

var userInputNumber = prompt("Enter a ODD number between 1-50:")
function allOddNumbersToX () {

       console.log(userInputNumber);

       while (userInputNumber > 50 || userInputNumber % 2 === 0) {
              userInputNumber = prompt("another number.");
              console.log(userInputNumber);
              //break;
       }
     //  console.log("Skip this " +userInputNumber)

       for (var i = 1; i < 50; i += 2) {
              if (i != userInputNumber) {
                     console.log("Here is an ODD number: " +i)
                     continue;
              }
              //if (i % 2 === 0) {
                     //console.log("Here is an odd number: " +(i++));
                     //continue;
                     // if (i == userInputNumber);
                    // console.log("Oddly Num: " +i);
                     //break;
                //     continue;
            //  }
              //console.log("Here is an odd number: " +i);
              console.log("Skipping: " +i);
         }
}

allOddNumbersToX();


      // var numberToStopAt = userInputNumber < 50;

      // for (var i = 0; i <= 50; i++) {

       // if (userInputNumber > 50){
       //        prompt("Invalid Input FOO. Use another number");
       // } else {
       //        console.log("Move forward");
       // }
       // //       var userInputNumber = prompt("Enter a ODD number between 1-50:")
//
//     //for (var i = 0; i <= 50; i++) {
//         //
// if (userInputNumber > 50){
//        prompt("Invalid Input FOO. Use another number");
// } else {
//        console.log("Move forward");
// }
//var userInputNumber =
        // if (userInputNumber >= 50 && userInputNumber % 2 === 0) {
        // var success = (userInputNumber < 50 && userInputNumber % 2 !== 0)
       //
       // do {
       //        //console.log("Invalid input");
       //        //return prompt("Invalid Input FOO. Use another number");
       //        //var userInputNumber = userInputNumber < 50 && userInputNumber % 2 !== 0;
       //        var userInputNumber = userInputNumber < 50;
       //        //for (var i = 0; i <= 50; i++) ;
       //
       // } while (prompt("Invalid Input FOO. Use another number"));


        //(userInputNumber >= 50 && userInputNumber % 2 === 0)
        // if (userInputNumber < 50 && userInputNumber % 2 !== 0) {
        //
        // } else {
        //     prompt("you good")
        // }
        // do {
        //     (userInputNumber >= 50 && userInputNumber % 2 !== 0)
        //     //console.log("Here is an odd number: " +i);
        //     //continue;
        //     console.log("Invalid input");
        //     return prompt("Invalid Input FOO. Use another number");
        // } while ();


//        } else {
        //         prompt("you good")
        //       }

        //if (i % 2 !==0)
        //console.log("Counter is " +i);
        //
        // if (i % 2 !==0){
        //     //console.log("Here is an odd number: " +i);
        //     //continue;
        // }
        //do {
        //  console.log("Invalid input");
        //prompt("Invalid Input. Use another number");
        //       if (userInputNumber <50 && userInputNumber % 2 === 0);{
        //     break;
        //         }
        //
        //      } while (userInputNumber < 50); {
        //         // break;
        //          console.log("Can you see this")
        //continue;
        //prompt("Enter an ODD number between 1-50:")

        //console.log("User will not see");
        //}

        // for (var i = 0; i <= 50; i++) {
        //         //if (i % 2 !==0)
        //         console.log("Counter is " +i);
        //
        //     if (i % 2 !==0){
        //         console.log("Here is an odd number: " +i);
        //         continue;
        //     }
        //     prompt("Enter an ODD number between 1-50:")

//
// var userInputNumber = prompt("Enter a ODD number between 1-50:")
// //var numberToStopAt = userInputNumber;
//
// function allOdds(){
//     for (var i = 0; i <=50; i++) {
//         if (i % 2 !== 0) {
//             console.log('Odd number is: ' + i);
//         }else if (i === userInputNumber) {
//                 console.log('You got: ' + userInputNumber)
//                 // console.log('We have reached the stopping point: break!');
//                 // // use the break keyword to exit from the while loop
//                 break;
//                 // nothing after the break will get processed
//                 console.log('You will never see this.');
//             }
//         }
//     }
//
//
// allOdds();

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


