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


alert ("Buy 2 get 1 free could apply to you! If you are a premium member this offer automatically applies. Regardless, please answer the following questions to see if you qualify for this offer.");
var productOffer = confirm("This offer expires on October 31, 2021. Has this date passed? Click 'Ok' if October 31, 2021 has passed.");
    let offerResponse;
        if (productOffer == null || productOffer === true){
        alert("The offer has expired.");
        if (alert || true){
        }
    } else {
            offerResponse = confirm("Are you a premium member? Click 'Ok' if you are a premium member.");
            if (productOffer == null || productOffer === true) {
            } else {
                alert("The buy-2-get-1 offer still applies to you.")
            }
    }

confirm("Would you like to become a premium member? Click 'Ok' if you would like to become a premium member.")
let offerPremium = prompt("What is your email address? Please type below:");
            if (offerPremium === null){
                alert("You have opted out of premium membership. Thank you.")
            } else {
                alert("A premium membership application will be sent to: " + offerPremium + "");
            }






var username = "codeup";
var password = "notastrongpassword";;

var passwordCharacter = prompt("Password must be at least 5 characters.");
var passwordNoUsername = prompt("Password must not include the username.");
var usernameLength = prompt("Username must be no more than 20 characters.");
var usernamePassword = prompt("Neither username or password can start or end with whitespace.");
alert()

// Create a variable that holds a boolean value for each of the following conditions:
//the password must be at least 5 characters
//the password must not include the username
//the username must be no more than 20 characters
//neither the username or password can start or end with whitespace