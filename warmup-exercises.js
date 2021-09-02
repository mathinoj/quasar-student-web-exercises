//
////function named tellFortune
// //takes in 4 arguments: number of kids, partners name, location, job title
// //outputs fortune like "You will be an X in Y, and married to Z with N kids."
// //call function 3 times with 3 different values


function tellFortune([numberOfKids, partnersName, location, job]){
// var partnersName = ["Sara", "Josh", "Rachel", "Alex"];
// var location = ['Texas', 'Iowa', 'Idaho', 'Maine'];
// var job = ['Plumber', 'Teacher', 'Engineer', 'Athlete']
// var numberOfKids = ['0', '1', '2', '3'];


    var output = "You will be an " +job+ " in " +location+ " and married to " +partnersName+ " with " +numberOfKids+ " kids.";
    return output;
}
//send this to console to view
//questions says to call the function. The sentence above this is calling it in the console.


//// Returns a random integer between min and max.
// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

//var output = "You will have " +numberOfKids+ " children"
//console.log(output);
//return output;