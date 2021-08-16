"use strict";


alert ("Buy 2 get 1 free could apply to you! If you are a premium member this offer automatically applies. Regardless, please answer the following questions to see if you qualify for this offer.");
var productOffer = confirm("This offer expires on October 31, 2021. Has this date passed? Click 'Ok' if October 31, 2021 has passed.");
    let offerResponse;
        if (productOffer == null || productOffer === true){
        alert("The offer has expired.");
        if (alert || true){
        }
    } else {
            offerResponse = confirm("Are you a premium member? Click 'Ok' if you are a premium member.");
            if (productOffer == null || productOffer === true) {
            } else {
                alert("The buy-2-get-1 offer still applies to you.")
            }
    }

confirm("Would you like to become a premium member? Click 'Ok' if you would like to become a premium member.")
let offerPremium = prompt("What is your email address? Please type below:");
            if (offerPremium === null){
                alert("You have opted out of premium membership. Thank you.")
            } else {
                alert("A premium membership application will be sent to: " + offerPremium + "");
            }