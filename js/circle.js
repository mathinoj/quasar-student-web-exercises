(function() {
    "use strict";


    // create a circle object
    var circle = {
        radius: 3,

        getArea: function (area) {
            // TODO: complete this method
            area = Math.PI * Math.pow(3, 2)
            return area; // TODO: return the proper value
            //console.log(area);
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            if (this.getArea % 1 === 0) {
                return Math.round(this.getArea(doRounding));
//            } else {
//                return this.getArea(doRounding);
                //this.getArea.area = Math.round[this.getArea];
            }
            //Math.round();
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: " + Math.round(this.getArea(doRounding)) + " .");
        }
    };

//     var circleTwo = {
//         radiusTwo: 5,
//
//         getAreaTwo: function (areaTwo) {
//             // TODO: complete this method
//             areaTwo = Math.PI * Math.pow(5, 2)
//             return areaTwo; // TODO: return the proper value
//             //console.log(area);
//         },
//
//         logInfo: function (doRoundingTwo) {
//             // TODO: complete this method.
//             if (this.getAreaTwo % 1 === 0) {
//                 return Math.round(this.getAreaTwo(doRoundingTwo));
// //            } else {
// //                return this.getArea(doRounding);
//                 //this.getArea.area = Math.round[this.getArea];
//             }
//             //Math.round();
//             // If doRounding is true, round the result to the nearest integer.
//             // Otherwise, output the complete value
//
//             console.log("Area of a circle with radius: " + this.radiusTwo + ", is: " + Math.round(this.getAreaTwo(doRoundingTwo)) + " .");
//         }
//     };



    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
