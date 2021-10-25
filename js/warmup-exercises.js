//
////function named tellFortune
// //takes in 4 arguments: number of kids, partners name, location, job title
// //outputs fortune like "You will be an X in Y, and married to Z with N kids."
// //call function 3 times with 3 different values

//
// function tellFortune([numberOfKids, partnersName, location, job]){
// // var partnersName = ["Sara", "Josh", "Rachel", "Alex"];
// // var location = ['Texas', 'Iowa', 'Idaho', 'Maine'];
// // var job = ['Plumber', 'Teacher', 'Engineer', 'Athlete']
// // var numberOfKids = ['0', '1', '2', '3'];
//
//
//     var output = "You will be an " +job+ " in " +location+ " and married to " +partnersName+ " with " +numberOfKids+ " kids.";
//     return output;
// }
//send this to console to view
//questions says to call the function. The sentence above this is calling it in the console.


//// Returns a random integer between min and max.
// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

//var output = "You will have " +numberOfKids+ " children"
//console.log(output);
//return output;


// function dogsAge(input1, input2){
//     var output = "Your dogs age is " +(input1 * 7)+ " old in dog years. If your dog is " +(input1 * 7)+ " years old, then you are " +input2 % 7+ " years old."
//     return output;
// }

// function dogsAge(input1, input2){
//     return "Your dogs age is " +(input1 * 7)+ " old in dog years. If your dog is " +(input1 * 7)+ " years old, then you are " +input2 % 7+ " years old.";
// }

//var ageInHumanYears = dogAge * conversion (inputs dogAge, conversion)

//human age would have to be

// SEPTEMBER 14 MORNING WARMUP EXERCISE
// Given arrays of strings that are orders of food in string form to your function, write a function named tacoTuesday that returns TRUE or FALSE if the array provided has any element mention the word ‘taco’ in its value.
//     var hasTacos = [“blueberry muffin”, “banana”, “yogurt”, “cereal”, “brisket and egg taco”]
// var noTacos = [“parfait”, “omlette de frumage”, “protein shake”, “fasting”]
// tacoTuesday(hasTacos) //true
// tacoTuesday(noTacos) //false


// function tacoTuesday (input){
//     const includesTaco = array.includes("taco");
//
//     // var input = ["taco"];
//     // if (input === ["taco"]){
//     if (input === includesTaco){
//         return true;
//     }
//     console.log(tacoTuesday());
// }
// tacoTuesday();

// function tacoTuesday (arr){
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i].includes("taco")){
//             return true;
//         }
//     }
//     return false;
// }
// USE STRING.INLCLUDES()
// TO TEST THIS FUNCTION JUST COPY AND PASTE INTO BROWSER CONSOLE. THEN DO "TACOTUESDAY('')"


// var fish1 = { type: "channel catfish", sizeInches: 18, locationCaught: "Lions Park", color: "blue"};
// var fish2 = { type: "channel catfish", sizeInches: 19, locationCaught: "Lions Park", color: "blue"};
// var fish3 = { type: "redfish", sizeInches: 22, locationCaught: "Braunig Lake", color: "red"};
// var fish4 = { type: "redfish", sizeInches: 29, locationCaught: "Braunig Lake", color: "red"}
// var kensCatch = [fish1, fish2, fish3, fish4]
// Also, well, I caught these - don't ask me where
// var sewerFish1 = { type: "tropical and unknown", sizeInches: 6, locationCaught: "sewer", color: "green"}
// var sewerFish2 = { type: "tropical and unknown", sizeInches: 3, locationCaught: "sewer", color: "blue"}
// var strangeCatch = [sewerFish1, sewerFish2]
// Bad news - I need some help with knowing what all I caught
// Write a function named fishingWeekend that takes in an array of fish objects
// fishingWeekend() will alert me with three seperate alerts from that array of fish objects
// 1. First, program an alert letting me know if I caught a red fish, blue fish, both, or neither in my catch [my array]
// 2. Second, an alert letting me know the average sizes of the total number of fish I caught [“That totals up to 4 fish with an average length of 22 inches.“]
// 3. An alert letting me know if I got any catfish [“You caught some catfish tonight!“
// HINT: Do NOT try to do all of these in one go
//  Write your function out incrementally, one alert at a time, piece by piece to eventually combine into the larger function desired.
// function fishingWeekend(arr) {
//     var fish1 = {type: "channel catfish", sizeInches: 18, locationCaught: "Lions Park", color: "blue"};
//     var fish2 = {type: "channel catfish", sizeInches: 19, locationCaught: "Lions Park", color: "blue"};
//     var fish3 = {type: "redfish", sizeInches: 22, locationCaught: "Braunig Lake", color: "red"};
//     var fish4 = {type: "redfish", sizeInches: 29, locationCaught: "Braunig Lake", color: "red"}
//     var kensCatch = [fish1, fish2, fish3, fish4]
//     // var randomItem = kensCatch[Math.floor(Math.random()*kensCatch.length)];
//     let fish = kensCatch[Math.floor(Math.random() * kensCatch.length)]
//     console.log(fish)
//
//     for (var i = 0; i < kensCatch.length; i++) {
//         if (kensCatch[i].includes("red" || "blue")){
//             // return alert("You caught " +kensCatch
//             return true
//         } else if ((kensCatch[i].includes("red" && "blue"))) {
//             return alert("Now you got " +kensCatch)
//         } else {
//             return false;
//         }
//     }
//     alert("you got " +kensCatch)
// }
//


// if(arr[i].includes("taco")){
//     return true;

// || (kensCatch[i].includes("red" && "blue"))

// TODO: Finish coding this program. You need to stop the setInterval() method after the showTime() function has run five times
// let count = 0;
// function showTime() {
//     // return new date and time
//     let dateTime = new Date();
//     // return the time
//     let time = dateTime.toLocaleTimeString();
//     count += 1;
//     //if the count reaches 5, stop the program.
//     if (count >= 3){
//         console.log("Lst timestamp.")
//         clearInterval(display);
//     }
//     console.log(time)
// }
// let display = setInterval(showTime, 9000);

// function greet(){
//     console.log("YO");
// }
// setTimeout(greet, 2000);
// or window.setTimeout(greet, 2000);

// function greet(){
//     console.log("YO");
// }
// var delayedGreeting = setTimeout(greet, 2000);
//
// window.clearTimeout(delayedGreeting);
// or clearTimeout(delayedGreeting)

'use strict';

// function logEvens (num) {
//     for (var i = 1; i < 100; i++) {
//         if (i % 2 !== 0){
//          return num;
//         // } else {
//         //     alert("input even number");
//         }
//     }
//     console.log("even number here " +i)
// }


// function logEvens (num) {
//     for (var i = 0; i <= num; i++) {
//         if (i % 2 === 0){
//             console.log("even number here " +i);
//         }
//     }
// }
//
// function logOdds(num){
//     for (var i = 0; i <= num; i++){
//         if (i % 2 !== 0){
//             console.log("odd number here " +i);
//         }
//     }
// }

// function logNum (num){
//     for (var i = 1; i <= num; i++) {
//         if (i % 2 !== 0){
//             console.log(+i + " is an odd number.");
//         } else {
//             console.log(+i + " is an even number.")
//         }
//     }
// }

// Get Sum of People's Budget
// Create the function named getBudgets that takes an array with objects and returns the sum of people's budgets.

// Examples
// getBudgets([
//     {name: "John", age: 21, budget: 23000},
//     {name: "Steve", age: 32, budget: 40000},
//     {name: "Martin", age: 16, budget: 2700}
// ])
//65700
// getBudgets([
//     {name: "John", age: 21, budget: 29000},
//     {name: "Steve", age: 32, budget: 32000},
//     {name: "Martin", age: 16, budget: 1600}
// ])
//62600


// function gotBudgets(arr){
//     var arrayBud = [
//         {name: "John", age: 21, budget: 23000},
//         {name: "Steve", age: 32, budget: 40000},
//         {name: "Martin", age: 16, budget: 2700}
//     ]
// var total = 0
// var what = arrayBud.indexOf()
// console.log(what);
// //
// // console.log(arrayBud);
// // console.log(arrayBud.length);
//
// arrayBud.forEach(function (budgets){
//     for (var i=2; i < arrayBud.length; i++){
//         console.log(arrayBud);
//         alert('The budget is: ' + (total+=budgets));
//         }
// })
// marks.forEach(function(element, index){
//     total+=element;
// });

//     var shoppers = [
//         {name: 'Cameron', amount: 180},
//         {name: 'Ryan', amount: 250},
//         {name: 'George', amount: 320}
//     ];
//
// shoppers.forEach(function (shopper) {
//     //console.log(shopper.name+ " spent $" +shopper.amount)
//     //var qualify = (shopper.amount > 200)
//     var discount = (shopper.amount * .12)
//     if (shopper.amount > 200) {
//         console.log(shopper.name + " qualifies for a discount.")
//     } else {
//         console.log(shopper.name + "'s current amount is $" + shopper.amount + ". " + shopper.name + " does not qualify for a discount.")
//         console.log("If " + shopper.name + " spends $" + (201 - shopper.amount) + " more, the shopper will receive a 12% discount.")
//     }
//     if (shopper.amount > 200) {
//         console.log(shopper.name + "'s current amount is: $" + shopper.amount + ". Their new amount is: $" + (shopper.amount - discount))
//     }
// })


// var index = arrayBud.indexOf('budget');
// console.log(index);

// var index = arrayBud.indexOf('budget');
// console.log(index);
// console.log(arrayBud[0])
// console.log(arrayBud[1])
// console.log(arrayBud[2])


// console.log(arrayBud[arrayBud.length - 1])

// for (var i=0; i < arrayBud.length; i++){
//     console.log(arrayBud);
//     alert('The shape at index ' + i + ' is: ' + array[i]);
//     if(array[i].includes('budget')){
//         alert("Your total is " +array.budget);
//         console.log(budget);
//     }
// }
// var sum = null;
//
// array.forEach(function(value){
//     console.log(sum += value.budget);
// });
// }
// console.log(gotBudgets)

// function tacoTuesday (input){
//     const includesTaco = array.includes("taco");
//
//     // var input = ["taco"];
//     // if (input === ["taco"]){
//     if (input === includesTaco){
//         return true;
//     }
//     console.log(tacoTuesday());
// }
// tacoTuesday();

// function tacoTuesday (arr){
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i].includes("taco")){
//             return true;
//         }
//     }
//     return false;
// }

// console.log(gotBudgets(arr))

// var sum = array.reduce(function(a, b){
//     return a + b;
// }, 0);
//
// for (var i = 0; i < kensCatch.length; i++) {
//         if (kensCatch[i].includes("red" || "blue")){
//             // return alert("You caught " +kensCatch
//             return true
//         } else if ((kensCatch[i].includes("red" && "blue"))) {
//             return alert("Now you got " +kensCatch)
//         } else {
//             return false;
//         }
//     }

// Find the Smallest and Biggest Numbers
//  Create a function named minMax that takes an array of numbers and return both the minimum and maximum numbers, in that order.
//
//  Examples
//   minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
//   minMax([2334454, 5]) ➞ [5, 2334454]
//   minMax([1]) ➞ [1, 1]
//
//  Notes All test arrays will have at least one element and are valid


// function big(){
//     var firstNums = ([1, 2, 3, 4, 5])
//
//     Math.max(firstNums);
//     console.log(max);
// }

// var largest = firstNums[0];

// function minMax(arr) {

// for (var i = 0; i < firstNums.length; i++) {
//     if (largest < firstNums[i]) {
//         largest = firstNums[i];
//     }
// }
// // }
// console.log(largest);

// var array = [3 , 6, 2, 56, 32, 5, 89, 32];
// var largest= 0;
//
// for (i=0; i<=largest;i++){
//     if (array>largest) {
//         var largest=array[i];
//     }
// }
//
// console.log(largest)

// firstNums.forEach(function (nums){
//     for (var i=0; i < firstNums.length; i++) {
//         console.log(firstNums);
//         if (largest < firstNums[i]) {
//             largest = firstNums[i];
//             alert('The budget is: ' +nums);
//         }
//     }
// })

// var sale = ([
//     {name: 'Jim Halpert', sales: 100},
//     {name: 'Dwight Schrute', sales: 50},
//     {name: 'Andy Bernard', sales: 150},
// ])
//
// function averageSales(arr){
//     // var num = sale.sales.length;
//     var num = 0;
//     sale.forEach(function (some){
//         num += some
//     })
//         // return (num += sale.length)
//         console.log(arr)
//         console.log(averageSales)
//
//     return (num/arr.length)
// arr.forEach(function (value){
// return (num /= value.sales)

// }

// function average(arr){
//     var num = 0;
//     arr.forEach(function (blah){
//         num += blah
//     });
//     return (num/arr.length);
// }


// DT UNIX TO STRING, CONVERTS SECONDS TO A DATE
// var date = new Date(1618317040).toLocaleDateString("en-US")
// console.log(date)

// var date = new Date(1618317040)
// console.log(date)

// Date objects are created with the new Date() constructor. There are 4 ways to create a new date object:
//     new Date()
//     new Date(year, month, day, hours, minutes, seconds, milliseconds)
//     new Date(milliseconds)
//     new Date(date string)
// toLocaleString - Converts a Date object to a string, using locale conventions
// toDateString - Converts the date portion of a Date object into a readable string
// https://timestamp.online/article/how-to-convert-timestamp-to-datetime-in-javascript
// https://www.w3schools.com/js/js_dates.asp
// https://coderrocketfuel.com/article/convert-a-unix-timestamp-to-a-date-in-vanilla-javascript THIS USES BASIC JS, SEE BELOW

// var thisMorning = 1633702800;
// function convert(dtNum){
//     var dtMilliSecs = dtNum * 1000 //seconds * 1000 = our milliseconds
//     var dateObj = new Date(dtMilliSecs); //pass in milliseconds to Date(constructor)
//     return dateObj.toLocaleString();
// }


// Get Sum of People's Budget
// Create the function named getBudgets that takes an array with objects and returns the sum of people's budgets.
//
// TODO THE STUFF BELOW WAS STUFF COVERED BY TUTORING WITH SHANSHAN ON 10/16
// TODO []=array
// {} inside array = object
// {stuff inside curly brackets is a whole element}
// {singular items within curly brackets (i.e. name, age, budget) is a property}

// getBudgets([
//            { name: "John", age: 21, budget: 23000 },
//        { name: "Steve",  age: 32, budget: 40000 },
//        { name: "Martin",  age: 16, budget: 2700 }
//    ]); 65700

// getYo([
//     {name: "John", age: 21, budget: 29000},
//     {name: "Steve", age: 32, budget: 32000},
//     {name: "Martin", age: 16, budget: 1600}
// ]);

// function getBudgets(arr) {
//     var bum = 0; //STARTING OFF POINT FOR CALCULATION, EXCEPT FOR MULTIPLY,you'd like do 1. IF YOU DOING STRINGS "", OBJECT {}, ARRAY []
//     for (var i = 0; i < arr.length; i++) {
//         bum = bum + arr[i].budget
//     }
//     return bum
// }
//
//
// console.log(getBudgets([
//     {name: "John", age: 21, budget: 23000},
//     {name: "Steve", age: 32, budget: 40000},
//     {name: "Martin", age: 16, budget: 2700},
//     {name: "Matt", age: 17, budget: 32700}
// ]));
//
// function getAge(array) {
//     var agers = 0;
//     for (var i = 0; i < array.length; i++) {
//         agers = agers + array[i].age
//     }
//     return agers
// }
//
// console.log(getAge([
//     {name: "John", age: 21, budget: 23000},
//     {name: "Steve", age: 32, budget: 40000},
//     {name: "Martin", age: 16, budget: 2700},
//     {name: "Matt", age: 17, budget: 32700}
// ]));

// TODO THIS PUTS A SPACE BUT IF YOU PUT COMMA IT WILL INPUT THEM IN RANDOM AREAS
// function getNames(blah) {
//     var names = " "
//     for (var i = 0; i < blah.length; i++) {
//         names = names + (blah[i].name + ' ')
//     }
//     return names
// }
// console.log(getNames([
//     {name: "John", age: 21, budget: 23000},
//     {name: "Steve", age: 32, budget: 40000},
//     {name: "Martin", age: 16, budget: 2700},
//     {name: "Matt", age: 17, budget: 32700}
// ]));
//
// //TODO THIS IS HOW YOU COULD DO IT BUT NOT RECEIVE RANDOM COMMAS
// var getYo = [
//     {name: "John", age: 21, budget: 29000},
//     {name: "Steve", age: 32, budget: 32000},
//     {name: "Martin", age: 16, budget: 1600}
// ]
//
// var namez = getYo.map(function (lame) {
//     return lame.name
// }).join(', ')
// console.log(namez);

// TODO THE STUFF ABOVE IS STUFF COVERED WITH SHANSHAN TUTORING ON 10/16


//TODO          ASSMENT REVIEW!!!!!!!!!!!!!!!! 10/18
function isNegative(num){
    // return num<0;
    // OOOOOORRRRR
    if (num < 0){
        return true;
    } else {
        return false;
    }
}

function isTen(num){
    // return num=10;
    // OOOOOOOORRRRRR
if (num === 10){
    return true;
}else{
    return false
}
}

function double(num){
    // return num*2;
    //OOOOOORRRRRR
if (num === num*2){
    return true;
}else{
    return false
}
}

//SOLUTION ONE TO REMOVE 9s
// function remove9S(arr){
//     var results = [];
//     for (var i = 0; i<arr.length; i++){
//         if(arr[i] !== 9){
//             results.push(arr[i]);
//         }
//     }
//     return results
// }

//SOLUTION TWO TO REMOVE 9s
// function remove9S(arr){
//     return arr.filter(function(num){return num !== 9}) //
// }

// SOLUTION TWO WRITTEN FOR BEGINNER JS VIEW, ITS SAME AS THE ONE ABOVE
function remove9S(arr){
return arr.filter(function(num){
    return num !== 9
})
}

function average(arr){
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum / arr.length;
}

// SOLUTION ONE FOR COUNT ODDS
// function countOdds(arr){
//     return arr.filter(function (num){return num % 2 !== 0}).length;
// }
//
// // SOLUTION TWO FOR COUNT ODDS
// function countOdds(arr){
//     return arr.filter(function (num){
//         return num % 2 !== 0
//     }).length;
// }

// SOLUTION THREE FOR COUNT ODDS
function getAge(array) {
    var agers = 0;
    for (var i = 0; i < array.length; i++) {
        agers = agers + array[i].age
    }
    return agers
}

// SOLUTIN ONE -- DOUGS WAY
// function averageSales(arr){
//     let arrayOfSales = arr.map(function (person){return person.sales});
//     return average(arrayOfSales);
//}

//SOLUTION TWO -- YOU CAME UP WITH THIS ON OWN
function averageSales(arr){
    var sum = 0
    for (var i = 0; i < arr.length; i++){
        sum += arr[i].sales;
    }
    return sum / arr.length
}

function convertNameToObject(name){
    let nameArr = name.split(' ');
    return{
        firstName: nameArr[0],
        lastName: nameArr[1]
    }
}

//SOLUTION ONE - LONG WAY
// function countVowels(input){
//     var inputCharacterArr = input.split('');
//     //console.log(inputCharacterArr)
//     var vowelCount = 0;
//     for (var i = 0; i < inputCharacterArr.length; i++){
//         var character = inputCharacterArr[i];
//         if(character.toLowerCase() === 'a' || character.toLowerCase() ==='e' || character.toLowerCase() ==='i' || character.toLowerCase() ==='o' || character.toLowerCase() ==='u'){
//            vowelCount++
//         }
//     }
//     return vowelCount;
// }

//SOLUTION TWO - SHORT WAY
function countVowels(input){
    var inputCharacterArr = input.split('');
    return inputCharacterArr.filter((character)=>'aeiou'.includes(character.toLowerCase())).length;
}

function analyzeWord(word){
    return{
        word: word,
        numberOfLetters: word.length,
        numberOfVowels: countVowels(word)
    }
}

// Function accepts a string that is a first and last name seperated by a space and a returns a string that has the first and last name capitalized
// SOLUTION ONE
function capitalizeName(name){
    let nameObject = convertNameToObject(name);
    let firstName = nameObject.firstName;
    let lastName = nameObject.lastName;

    return firstName[0].toUpperCase() + firstName.substring(1, firstName.length).toLowerCase() + ' ' + lastName[0].toUpperCase() + lastName.substring(1, lastName.length).toLowerCase()

    // console.log(nameObject.firstName);
    // console.log(nameObject.firstName + ' ' + nameObject.lastName);
    console.log(nameObject.firstName[0].toUpperCase() + nameObject.firstName.substring(1, nameObject.firstName.length).toLowerCase());
}

//SOLUTION TWO - CLEANER WAY
function capitalizeWord(word){
    return word[0].toUpperCase() + word.substring(1, word.length).toLowerCase()
}

function capitalizeName(name){
    let nameObject = convertNameToObject(name);
    return capitalizeWord(nameObject.firstName) + ' ' + capitalizeWord(nameObject.lastName)
}

//TODO THE ABOVE CODE IS FROM REVIEW ON 10/18

let numbers = [1, 2, 3, 4, 5];
numbers.map(n => n * 3)
console.log(numbers);
console.log(numbers.map);


//TODO JS II RETAKE REVIEW 10/25 ***********DOWN BELOW THIS LINE***************

//Function that accepts argument and returns a string 'number' or 'not number' based on if input is a number
function checkForNumber(input){
    if (typeof input === "number"){
        return "number";
    } else {
        return "not number"
    }
}

//Function returns string "even" or 'odd' when passed a numeric argument. The resulting string should represent if number is even or odd.
function evenOrOdd(input){
    if(input % 2 === 0){
        return "even"
    } else {
        return "odd"
    }
}

//Function accepts array of numbers and returns array with double value of each number
function doubleTheElements(arr){
    //Need to store the results.
    let results = [];
    //Loop through input array and store the results in our var.
    for (let i = 0; i < arr.length; i++){
        results.push(arr[i] * 2)
    }
    //return the results
    return results
}

//Function accepts array of numbers and returns the sum of those numbers
function sumOfElements(arr){
    //Create a var to store our running total
    let sum = 0;
    //loop over all of the elements
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    //return results
    return sum
}

//Function accepts array of objects where each object represents a product from a store that has a price property. The function should return the total of every objects price property
// totalPrice([
//     {name: 'tomatoes', price: 4},
//     {name: 'potatoes', price: 6},
//     {name: 'wine', price: 16}
// ])

function totalPrice(orderItems){
    let totalPrice = 0;
    for(let i = 0; i < orderItems.length; i++){
        totalPrice += orderItems[i].price
    }
    return totalPrice
    // return sumOfElements(orderItems.map(function (orderItems){
    //     return orderItem.price
    // }));  todo THIS IS A SHORTENED VERSION AND YOU WOULD CUT OUT 'let totalPrice - return totalPrice'
}

//Function accepts an array of objects where each object represents a product from a store that has a price property. The function should return the highest price value from the array.

// function findHighestPrice(orderItems){
//     let highestPrice = 0;
//     orderItems.forEach(function (orderItem) {
//         if(orderItem.price > highestPrice = orderItem.price;
//     }
//     })
//
//             return findHighestPrice;
// }

//Function accept an object that represents a customers transaction. The object passed into the function should have customerName. items, and clubMember properties. A customer will qualify for a discount if they have a total form the items property of 150 or more, or if they are club member. Should return a boolean

function discountCheck(order){
    let orderTotal = totalPrice(order.items);

    return orderTotal >= 150 || order.clubMember;
}

//Function with two parameters, a string that contains a name, and a number representing the products price, and returns an a object with properties name and price.
//newProduct([{'tomatoes', 3.99} , {name:'yu-gi-oh', price: 5.89])
function newProduct(name, price){
    return{
        name,
        price
    }
}

//Function accepts a string and returns the number of words in that string.
function countWords(input){
    if(input === ''){ //THIS Part below is to return a number, which was required as part of test
        return 0;
    }
    return input.split(' ').length;
}

//Function takes an integer and will return an object describing diff features of the input as a number.
//ex: describeNumber(45) // {value: 45, evenOrOdd: "odd", numberOfDigits: 2};
//ex: describeNumber(360) // {value: 360, evenOrOdd: "even", numberOfDigits: 3};
//ex: describeNumber(360) // {value: 0, evenOrOdd: "even", numberOfDigits: 1};

function describeNumber(input){
    return{
        value: parseInt(input), //string 123 input did not match the number 123 input, that is why parseInt was used
        evenOrOdd: evenOrOdd(input),
        numberOfDigits: input.toString().length
    }
}

//Function that accepts a string that has several words each seperated by a space, and returns a string with each word in all caps, and with spaces replaced by underscores (ex SCREAMING_SNAKE)
// screamingSnakeCse('Lord Palmerston') = LORD_PALMERSTON
function screamingSnakeCase(input){
    return input.split(' ').join('_').toUpperCase(); ONE WAY FOR THIS TO BE SOLVE
    // IN CONSOLE "welcome to codeup".split(' '); = 'welcome', 'to', 'codeup'
    // IN CONSOLE "welcome to codeup".split(' ').join('_'); = 'welcome_to_codeup'
    // IN CONSOLE "welcome to codeup".split(' ').join('_').toUpperCase(); = 'WELCOME_TO_CODEUP'
}