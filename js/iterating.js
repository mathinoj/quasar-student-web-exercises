(function(){
    "use strict";

	/**
	 * TODO:
	 * Create an array of 4 people's names and store it in a variable called
	 * 'names'.
	 */

var names = ['George', 'Rebecca', 'Tamara', 'Matthias'];
console.log(names);


	/**
	 * TODO:
	 * Create a log statement that will log the number of elements in the names
	 * array.
	 */

console.log(names.length);





	/**
	 * TODO:
	 * Create log statements that will print each of the names individually by
	 * accessing each element's index.
	 */

console.log("The first name is: " + names[0]);
console.log("The second name is: " + names[1]);
console.log("The third name is: " + names[2]);
console.log("The fourth name is: " + names[3]);





	/**
	 * TODO:
	 * Write some code that uses a for loop to log every item in the names
	 * array.
	 */
//
//     for (var i = 0; i < names.length; i++) {
//      console.log("There are " + names.length + " names, and one of them is: " + names[i] + ". This name has an index of " + i + " .");
// }


	/**
	 * TODO:
	 * Refactor your above code to use a `forEach` loop
	 */

	names.forEach (function(name) {
	console.log("There are " + names.length + " names, and one of them is: " + name + ". This name has an index of " + names.indexOf(name) + " .");
	});


//names.length -1


//var element =

/** ACCEPT ARRAY AND RETURN ELEMENT
    1) RETURNS FIRST ITEM IN THE ARRAY
    2) RETURNS SECOND ITEM IN THE ARRAY
    3) RETURNS LAST ITEM IN THE ARRAY

 var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'red'];

 var index = colors.indexOf('green');
 console.log(index);
 // 3

 index = colors.indexOf('red');
 console.log(index);
 // 0

 index = colors.lastIndexOf('red');
 console.log(index);
 // 7

//var pies = ['apple', 'cherry', 'key lime', 'huckleberry', 'rhubarb'];
 // /*
 // function lastThreePies(array) {
//     return array.slice(-3);
// }
 // console.log('lastThreePies(pies): ' , lastThreePies(pies));
 // //lastThreePies();
 //
 // //var lastThreePies = pies.slice(-3);
 // //console.log(lastThreePies)

 /**
	 * TODO:
	 * Create the following three functions, each will accept an array and
	 * return an an element from it
	 * - first: returns the first item in the array
	 * - second: returns the second item in the array
	 * - last: returns the last item in the array
	 *
	 * Example:
	 *  > first([1, 2, 3, 4, 5]) // returns 1
	 *  > second([1, 2, 3, 4, 5]) // returns 2
	 *  > last([1, 2, 3, 4, 5]) // return 5
	 */

var colors = ["Burple", "Blue", "Brown", "Black"];

function first (array){
	return array.lengthOf();
}

first();
console.log(first);



// function second(array){
// 	return array
// }
//
// function third (array){
// 	return array
// }






/*

//create a function that takes in an array of pies baked and return 3 most recently baked pies

var pies = ['apple', 'cherry', 'key lime', 'huckleberry', 'rhubarb'];
/*
function lastThreePies(array) {
    return array.slice(-3);
}
console.log('lastThreePies(pies): ' , lastThreePies(pies));
//lastThreePies();

//var lastThreePies = pies.slice(-3);
//console.log(lastThreePies)


 */

// .sort rearranges array, possibly in alphabetical order
// pies.sort();
// console.log(pies);

// pies.reverse();
//     console.log(pies);

// var names = "Bob Sally Mary";
//
// var namesArr = names.split(' ');
// console.log(namesArr);
//
// var namesString = namesArr.join(", ");
// console.log(namesString);

// create a function that will take in a formatted string of numbers and return an array of phone numbers without any symbols. Console.log the output of the returned array.
/*
	var phoneNumbers = '210-555-2020\n230-555-2020\n512-555-3030';
	// var phoneNumbersTwo =
	// var phoneNumbersThree =
	//
	// function stringOfNumbers (array) {
	// 	return array.split(', ');
	// }
	// console.log('The phone numbers are: ' , stringOfNumbers(phoneNumbers));

	function cleanPhoneNumbers (phoneNumbersString){
		var cleanedPhoneNumbers = [];

		//need to split string into individual phone numbers
		var phoneNumbersArr = phoneNumbersString.split('\n');
		phoneNumbersArr.forEach(function(phoneNumber){
			//remove dashes from each phone number
			var cleanedPhoneNumber = phoneNumber.split('-').join('')
			cleanedPhoneNumbers.push(cleanedPhoneNumber);
		});
		return cleanedPhoneNumbers;
	}
var results = cleanPhoneNumbers(phoneNumbers);
	console.log(results);
*/
})();
