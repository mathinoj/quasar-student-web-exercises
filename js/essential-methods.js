// Update the page with jQuery to add a link that toggles the class invisible on and off for all dd elements.

"use strict";
    $('.invisible').click(function() {
        $(this).css('visibility', 'hidden');
    });

// $(document).ready(function (){
//     $('.submit').click(function(){
//         $('.invisible').css('visibility', 'hidden');
//         $('.invisible:visible').css('visibility', 'visible');
//         })
//     })

$('document').ready(function() {
    $('#hide').click(function(event) {
        event.preventDefault();
        console.log('d');
        $('dd').toggleClass('invisible');
    });
});

// $('document').ready(function() {
//     $('#highlight-important').click(function(event) {
//         event.preventDefault();
//         $('.important').addClass('highlighted');
//     });
// });