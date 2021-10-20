"use strict";
    $('.invisible').click(function() {
        $(this).css('visibility', 'hidden');
    });


$('document').ready(function() {
    $('#hide').click(function(event) {
        event.preventDefault();
        console.log('d');
        $('dd').toggleClass('invisible');
    });
});

//     Create a button that, when clicked, makes the last li in each ul have a yellow background.
$('#submitYellow').click(function(event){
    event.preventDefault(); // prevents function from firing off before button is pressed -- it is good habit to input cuz its not needed
    $('ul').each(function(){
        $(this).children().last().css('background-color', 'orange')
    })
})


//     When any h3 is clicked, the lis underneath it should be bolded. Use font-weight: bold to achieve this.
$('h3').click(function(event){
    event.preventDefault();
    $(this).next().css('font-weight', 'bold')
})


//     When any list item is clicked, first li of the parent ul should have a font color of blue
$('li').click(function (event){
    event.preventDefault();
    $(this).parent().children().first().css('color', 'pink')
})



// When any of the dt elements is clicked, the element that was clicked should be highlighted.
$('dl').click(function (event){
    event.preventDefault();
    $('dt').each(function(){
        $(this).parent().children().css('background-color', 'Aquamarine')
    })
})
