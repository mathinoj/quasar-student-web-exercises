(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = {
        firstName: "Matthias",
        middleName: "Palomo",
        lastName: "Hinojosa",
    }

    console.log(person.firstName)
    console.log(person.middleName)
    console.log(person.lastName)


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function () {
        alert('Hello from big uncle ' + person.firstName + " " + person.middleName + " " + person.lastName)
    }
    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
//Display a line with the name of the person
//The amount before the discount
//The discount, if any
//And the amount after the discount

//Use a foreach loop to iterate through the array
//Console.log the relevant messages for each person


//var discount = shoppers.amount *.12
//    console.log(shopper.name+ " " +(shopper.amount * .12))

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function (shopper) {
        //console.log(shopper.name+ " spent $" +shopper.amount)
        //var qualify = (shopper.amount > 200)
        var discount = (shopper.amount * .12)
        if (shopper.amount > 200) {
            console.log(shopper.name + " qualifies for a discount.")
        } else {
            console.log(shopper.name + "'s current amount is $" + shopper.amount + ". " + shopper.name + " does not qualify for a discount.")
            console.log("If " + shopper.name + " spends $" + (201 - shopper.amount) + " more, the shopper will receive a 12% discount.")
        }
        if (shopper.amount > 200) {
            console.log(shopper.name + "'s current amount is: $" + shopper.amount + ". Their new amount is: $" + (shopper.amount - discount))
        }
    })

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

// Create an array of objects that represent books and store it in a variable named `books`.
// Each object should have a title and an author property.
// The author property should be an object with properties `firstName` and `lastName`.
//
// Loop through the books array and output the following information about each book:
//      The book number (use the index of the book in the)
//      The book title
//      Author's full name (first name + last name)
//
//    authorFirstName: "Douglas",
//     authorLastName: "Adams",

var books = [
        {
            bookPosition: "Book # 1",
            title: "The Salmon of Doubt",
            firstName: "Douglas",
            lastName: "Adams",
        },
        {
            bookPosition: "Book # 2",
            title: "Walkway",
            firstName: "Cory",
            lastName: "Doctorow",
        },
        {
            bookPosition: "Book # 3",
            title: "A Brief History of Time",
            firstName: "Stephen",
            lastName: "Hawking",
        },
        {
            bookPosition: "Book # 4",
            title: "The Count of Monte Cristo",
            firstName: "Alexander",
            lastName: "Dumas",
        },
        {
            bookPosition: "Book # 5",
            title: "Goosebumps",
            firstName: "R.L.",
            lastName: "Stine",
        }
    ];

for (var i = 0; i < books.length; i++) {
    console.log(books[i].bookPosition + ' is: ' + books[i].title+ " by " +books[i].firstName+ " " +books[i].lastName+ '.');
    //     console.log(books[i].bookPosition);
    //     console.log(books[i].title);
    //     console.log(books[i].firstName+ " " +books[i].lastName);
}


// * Bonus:
//         * - Create a function named `createBook` that accepts a title and author
//     *   name and returns a book object with the properties described
//     *   previously. Refactor your code that creates the books array to instead
//     *   use your function.
// * - Create a function named `showBookInfo` that accepts a book object and
//     *   outputs the information described above. Refactor your loop to use your
//     *   `showBookInfo` function.
// */

//accepts a title and author name
//returns a book object with the properties described previously
//Refactor your code that creates the books array to instead use your function.
//user types in book and book goes into array

    var books = [
        {
            bookPosition: "Book # 1",
            title: "The Salmon of Doubt",
            firstName: "Douglas",
            lastName: "Adams",
        },
        {
            bookPosition: "Book # 2",
            title: "Walkway",
            firstName: "Cory",
            lastName: "Doctorow",
        },
        {
            bookPosition: "Book # 3",
            title: "A Brief History of Time",
            firstName: "Stephen",
            lastName: "Hawking",
        },
        {
            bookPosition: "Book # 4",
            title: "The Count of Monte Cristo",
            firstName: "Alexander",
            lastName: "Dumas",
        },
        {
            bookPosition: "Book # 5",
            title: "Goosebumps",
            firstName: "R.L.",
            lastName: "Stine",
        }
    ];

console.log(books);

function createBook(){
    var otherBook = [
        {
            //bookPosition: "Book # 6",
            title: "Scary Story",
            firstName: "Matthias",
            lastName: "Hinojosa",
        }
    ];

    books.push(otherBook);
    console.log(createBook);
    console.log(books);
}

// function createBook(books){
//    var books = books.push(otherBook);
//    console.log(createBook);
// }
//console.log(createBook);






})();



    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

