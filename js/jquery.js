'use strict';

// $('body').keyup(function(event){
//     console.log('This key was pressed: ' +event.key);
//     myKeys += event.key.toUpperCase();
//     console.log(myKeys)
//     if(myKeys === 'ARROWUP' + 'ARROWUP' + 'ARROWDOWN' + 'ARROWDOWN' + 'ARROWLEFT' + 'ARROWRIGHT' + 'ARROWLEFT' + 'ARROWRIGHT' + 'B' + 'A' + "ENTER"){
//     // if(myKeys === 'arrowup' + 'arrowup' + 'arrowdown' + 'arrowdown' + 'arrowleft' + 'arrowright' + 'arrowleft' + 'arrowright' + 'b' + 'a' + 'enter'){ IF YOU DO IT LIKE THIS THEN YOU HAVE TO CHANGE "toLowerCase()"
//
//         alert('You win 30 lives!')
//     }
// })
// var myKeys="";


$('#audio').keypress(function(event){
    console.log('This key was pressed: ' +event.key);
    music += event.key.toLowerCase();
    console.log(music)
    if(music === 'm' + 'u' + 's' + 'i' + 'c' + 'c' + 'c' + 'c' + 'c' + 'c' + 'c' + 'c' + 'c' + 'c' + 'c' + 'c' + 'c' + 'c' + 'c' + 'c' + 'c' + 'c' + 'c' + 'c' + 'c' + 'c' + 'c' + 'c' + 'c' + 'c' + 'c' + 'c' + 'c' + 'c' + 'c' + 'c' + 'c' + 'c' + 'c'){
        document.getElementById('audio').play();
        // alert('You win 30 lives!')
    }
})
var music=''


$('h2').hover(
    function(){
        $(this).css('color', 'red').css('font-family', 'Metal Mania', 'cursive').css('font-size', '90px');
    },
    function(){
        $(this).css('color', 'white').css('font-size', '2px');
    }
);


// document.addEventListener('keydown', function(e) {
//     if (e.keyCode == 65) {
//         document.getElementById('audio').play();
//     }
// });

// function myFunction() {
//     var input, filter, i;
//     var newCoffee = [];
//     input = document.getElementById("myInput")
//     filter = input.value.toUpperCase();
//     coffees.forEach(function(coffee) {
//         if (coffee.name.toUpperCase().includes(filter.toUpperCase())) {
//             newCoffee.push(coffee)
//             console.log(newCoffee)
//             tbody.innerHTML = renderCoffees(newCoffee);
//         }})
// }


// $("body").keyup(function(event){
//     console.log("They key you pressed was: " +event.key);
//     myKeys += event.key;
//     console.log(myKeys);
//     if(myKeys === "quasar"){
//         alert('you entered the magic word')
//     }
// })
// var myKeys = ""