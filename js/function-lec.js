(function () {
    console.log("Welcome to Functions!");

    function sayHello() {
        console.log("Hello!");
    }

    console.log("In the file after creating the sayHello function");

    sayHello();

//Define an anonymous function
    var sayHowdy = function () {
        console.log("Howdy!");
    }

    sayHowdy()

//Arguments and Parameters
//things between () is arguments were passing to a function
    function add(x, y) {
        return x + y;
    }

    console.log("add(2,3) " + add(2, 3));

    function subtract(x, y) {
        return x - y;
    }

//Scope
    var instructor = "Doug"
    var day = "Friday";

    function tellTheDay() {
        return "Tell " + instructor + "it's " + day + "!";
    }

//creating variables inside a function is a "local scope", outside the function is "global scope"

    function greeting() {
        var username = "Kenneth";
        return "Hi, " + username;
    }

    console.log(greeting());
//console.log(username);
//username is undefined because it is in the "local scope" of the function

    function checkDay() {
        var day = "Monday";
        return day;
    }

    console.log("It's " + checkDay());
//local scope overrides global scope, but be careful about overriding global scope

})();

//below is an immediately invoked function, which we added to the function above
//(function () {
// })();


//
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

let isClassFull = confirm ("Is the class you are wanting to be enrolled for full? Click 'Ok' if the class is full.");
let response;
if (isClassFull == null || isClassFull == true){
    response = alert("You cannot be enrolled into the class because it is full.");
} else{
    response = alert("You might be enrolled for the class if it does not conflict with your current schedule.");
}

let classSchedule = confirm("Does this class conflict with your current schedule? Click 'Ok' if the class conflicts with your current schedule.");
let followUpResponse;
if (classSchedule == null || classSchedule == true) {
    followUpResponse = alert("You cannot be enrolled into the class because it conflicts with your schedule");
}else{
    followUpResponse = alert("You can be enrolled for this class because it does not conflict with your schedule and it is not full");
}

console.log(isClassFull)
console.log(classSchedule)
