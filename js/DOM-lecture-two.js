var button1 = document.getElementById("btn1");
var button2 = document.getElementById("btn2");

// button1.addEventListener("click", function (){
//     // alert("YO")
//     var listItems = document.getElementsByTagName("li");
//     console.log(listItems)
//
//     for(var i = 0; i < listItems.length; i++){
//         listItems[i].style.background = 'red'
//     }
// })
// WHEN USER CLICKS ON BUTTON THEN THE STUFF ABOVE HAPPENS, THE ALERT WOULD HAPPEN BUT ITS TAKEN OUT RIGHT NOW


// anonymous function can be this, its unnamed unlabeled unregistered
// function(num){
//     return num+2
// }

// button2.addEventListener('click', function(){
//     alert("NOW YOU DIE!")
// })
// ABOVE FUNCTION IS JUST FOR FUN

// !!!HOW TO REMOVE EVENT!!!
//      DONT DO THIS LIKE HOW ITS MENTIONED IN SOME PLACES
// button2.addEventListener("click", function (){
//     button1.removeEventListener("click", function (){
//         var listItems = document.getElementsByTagName("li")
//     })
// })

var red = function (){
    var listItems = document.getElementsByTagName("li")

    for(var i = 0; i < listItems.length; i++){
        listItems[i].style.backgroundColor = "red";
    }
}

button1.addEventListener("click", red)
button2.addEventListener("click", function (){
    button1.removeEventListener("click", red)
})

//WHAT HAPPENS ABOVE IS THAT YOU PROGRAMMED BUTTON TWO TO STOP BUTTON ONE FROM CHANGING COLOR. THE USER WERE FIRST HAVE TO CLICK BUTTON 2