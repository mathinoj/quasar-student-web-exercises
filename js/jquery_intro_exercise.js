"use strict";

// SETUP EXERCISE
// $(document).ready(function() {
//     alert("You have been alerted about DOM being aloaded.");
// });

// ID SELECTORS EXERCISE
// var hello = $('#hello').html();
// alert(hello);
//
// var ipsum = $('#ipsum').html();
// alert(ipsum);


// CLASS SELECTORS EXERCISE
// $('.lorem').css('border', '7px solid orangered');

// Q4 Remove the class from one of the elements. Refresh and test that the border has been removed. YES THE BORDER AROUND THAT ELEMENT GETS REMOVED

// Q5 Give another element an id of codeup. Does this element get a border now? NO, ONLY CLASSES WILL GET THE BORDER, NOT THE IDs


// ELEMENT SELECTORS EXERCISE
// $('li').css('font-size', '20px');
//
// $('h1, p, li').css('background-color', 'gray');

// $('#yoyoHead').css('background-color', 'orangered').css('font-size', '50px'); JUST PLAYING AROUND ON THIS ONE

// $('h1').ready(function() {
//     alert("ALERTED H1.");
// });

// MULTIPLE SELECTORS EXERCISE
// YOU DID THIS IN THE STUFF ABOVE



//MOUSE OVER EVENTS EXERCISES
// $('#ding').click(
//     function (){
//         $(this).css('background-color', 'green');
//     }
// )
// OR YOU CAN WRITE LIKE THIS, SEE BELOW!!!!!!
// $('#ding').click(function (){
//     $(this).css('background-color', 'green');
// })



// $('p').dblclick(
//     function (){
//         $(this).css('font-size', '18px');
//     }
// );

// $('p').dblclick(
//     function (){
//         $(this).css('font-size', '18px').css('font-family', 'Creepster', 'cursive');
//     }
// );
//
//
// $('li').hover(
//     function(){
//         $(this).css('color', 'red');
//     },
//     function(){
//         $(this).css('color', 'black');
//     }
// );
//
// $('#green').hover(
//     function(){
//         $(this).css('color', 'green');
//     },
//     function(){
//         $(this).css('color', 'red');
//     }
// );
//
// $('h2').hover(
//     function(){
//         $(this).css('color', 'red').css('font-family', 'Creepster', 'cursive').css('font-size', '90px');
//     },
//     function(){
//         $(this).css('color', 'white').css('font-size', '2px');
//     }
// );

// h1.hidden {
//     display: none;
// }


// font-family: 'Creepster', cursive;

// EXTRA STUFF SHOWN BY DORIAN
// $('.greet').css('background-color', "orange").css("margin", '2px').html('<strong>Adieu</strong>') this is how deep you can gets.

// $('*').css('border', '1px solid red').css('padding', '5px').css('margin', '5px'); this is the ALL SELECTOR

// var button1 = $('btn1');
//
// button1.click(function (e){
//     alert('button 1 is clicked')
//     $('p').css("background-color" , "rebeccapurple")
// })
// THIS VAR/FUNCTION ALERTS WHEN BUTTON IS CLICKED AND CHANGES A PARAGRAPH TO PURPLE. BASICALLY TWO ACTIONS IN ONE


//KEYDOWN - Keeps tracking the key that is being pushed down. If user holds down "a" then it'll track "aaaaaaaaaaa" until released.
// $('body').keydown(function(event){
//     console.log(event.key);
// })

//to see this in the console go to

//KEYPRESS
// $("body").keypress(function(event){
//     console.log(event.key);
// })

//KEYUP - when key is released the event will register. Unlike keydown this will track the "a" after it's let off.
$("body").keyup(function(event){
    console.log(event.key);
})


// THIS IS FOR A JQUERY MORNING EXERCISE ON 10/4
var para1 = $('.para');

para1.click(function (e) {
    // alert('Lorem paragraph is clicked')
    alert($(this).text())
})

//     or THE BETTER WAY...
// $("p").click(function (e){
//     alert($(this).text())
// })


// $("body").keyup(function(event){
//     console.log("They key you pressed was: " +event.key);
//     myKeys += event.key;
//     console.log(myKeys);
//     if(myKeys === "quasar"){
//         alert('you entered the magic word')
//     }
// })
// var myKeys = ""

//above is a global variable for the function above it
// global variable: myKeys = myKeys + event.key; or myKeys += event.key;