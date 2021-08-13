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