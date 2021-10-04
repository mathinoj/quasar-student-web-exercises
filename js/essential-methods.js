"use strict";
//     $('.invisible').click(function() {
//         $(this).css('visibility', 'hidden');
//     });
//
//
// $('document').ready(function() {
//     $('#hide').click(function(event) {
//         event.preventDefault();
//         console.log('d');
//         $('dd').toggleClass('invisible');
//     });
// });

// Create a button that, when clicked, makes the last li in each ul have a yellow background.

// $('document').ready(function() {
//     $('#submit').click(function(event) {
//         event.preventDefault();
//         console.log('d');
//         $('li').toggleClass('li', "background-color", "red" );
//         // $( "li" ).last().css.toggleClass( "li", "background-color", "red" );
//     });
// });

$('document').ready(function() {
    $('#submit').click(function(event) {
        event.preventDefault();
        console.log('d');
        $('#national, #local, #state').last().children().addClass( 'highlight' );
        // $( "li" ).last().css.toggleClass( "li", "background-color", "red" );
    });
});

// $( "ul li" ).last().addClass( "highlight" );

