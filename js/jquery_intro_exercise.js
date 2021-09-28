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





$('#ding').click(
    function (){
        $(this).css('background-color', 'green');
    }
)

$('p').dblclick(
    function (){
        $(this).css('font-size', '18px');
    }
)


// $('li').hover( handlerIn, handlerOut )

$('li').hover(
    function(){
        $(this).css('color', 'red');
    },
    function(){
        $(this).css('color', 'black');
    }
);


// EXTRA STUFF SHOWN BY DORIAN
// $('.greet').css('background-color', "orange").css("margin", '2px').html('<strong>Adieu</strong>') this is how deep you can gets.

// $('*').css('border', '1px solid red').css('padding', '5px').css('margin', '5px'); this is the ALL SELECTOR