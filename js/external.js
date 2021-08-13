"use strict";

alert("Welcome to my Website!")

var userInputColor = prompt("What is your favorite color?");
alert("Great, " +userInputColor+ " is my favorite color too.");


var userInputMovie = prompt("How many days in total did you rent The Little Mermaid, Brother Bear, and Hercules?")
var userInputCheckOutDate = prompt("Okay, and what is the price for a movie per day? (do not include $)")
var total = userInputMovie*userInputCheckOutDate
alert("Your total cost for the movies you rented is " +"$"+ +total+ "");

var userInputGoogle = prompt("How much do you get paid per hour at Google?");
var userInputAmazon = prompt("How much do you get paid per hour at Amazon?");
var userInputFacebook = prompt("How much do you get paid per hour at Facebook?");

var userInputGoogleHours = prompt("How many hours did you work this week at Google?");
var userInputAmazonHours = prompt("How many hours did you work this week at Amazon?");
var userInputFacebookHours = prompt("How many hours did you work this week at Facebook?");

var totalGoogle = userInputGoogle*userInputGoogleHours
var totalAmazon = userInputAmazon*userInputAmazonHours
var totalFacebook = userInputFacebook*userInputFacebookHours
alert("Your total income this week for working at Google, Amazon, and Facebook is " +"$"+ +(totalGoogle+totalAmazon+totalFacebook)+ "");


// When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
// Use an alert to show the results of each problem.

//A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with
//her current schedule.

