$(document).ready(function () {
    // Transition effect for navbar 
    $(window).scroll(function () {
        // checks if window is scrolled more than 500px, adds/removes solid class
        if ($(this).scrollTop() > 650) {
            $('.nav').addClass('solid');
        } else {
            $('.nav').removeClass('solid');
        }
    });
});

function initMap() {
    var location = { lat: -38.13812, lng: 176.241455 }

    var map = new
        google.maps.Map(document.getElementById("map"),
            {
                zoom: 12,
                center: location
            });
    var marker = new
        google.maps.Marker({
            position: location,
            map: map
        });
}

function ValidationEvent() {
    var name = document.forms["Form"]["name"];
    var email = document.forms["Form"]["email"];
    var subject = document.forms["Form"]["subject"];
    var message = document.forms["Form"]["message"];

    if (name.value == "") {
        window.alert("Please enter your Name");
        name.focus();
        return false;
    }
    if (email.value == "") {
        window.alert("Please enter a valid Email");
        email.focus();
        return false;
    }
    if (subject.value == "") {
        window.alert("Please enter a Subject");
        subject.focus();
        return false;
    }
    if (message.value == "") {
        window.alert("Please enter your Message");
        message.focus();
        return false;
    }
    return true;
}






