

$(function () {
    $("#header").load("templates/common/header.html");

    $("#footer").load("templates/common/footer.html");
    $('.intro').fadeIn(1500);

    function isValidEmailAddress(emailAddress) {
        var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
        // alert( pattern.test(emailAddress) );
        return pattern.test(emailAddress);
    }

    //EmailContact
    $('#contact-form').submit(function (e) {
        let userEmail = $('#email').val();
        let userText = $('#text').val();
        e.preventDefault();
        if (!userEmail || !userText) {

            alert('Please check your entries');

        } else {
            $.ajax({
                url: "https://formspree.io/winsomewe.kek37@gmail.com",
                method: "POST",
                data: $(this).serialize(),
                dataType: "json"
            });
            $(this).get(0).reset();
            alert('Message Sent');
        }
    });

    //EmailCheck
    $('#email').keyup(function () {
        if (!isValidEmailAddress($('#email').val())) {
            $('#email').css('border', '3px solid red');
        } else {
            $('#email').css('border', '3px solid green');
        }
    });
    //TextCheck
    $('#text').keyup(function () {
        if ($('#text').val().length > 1000) {
            $('#text').css('border', '3px solid red');
        } else {
            $('#text').css('border', '3px solid green');
        }
    });

    //FormSubmit
    $('.button').on('click', function () {
        $('#contact-form').submit();
    });

    //Animate
    // $(".menu-anchor").click(function(){
    //     // $(this).animate({height: "+=20px"});
    //     console.log('azis')
    // });
    // $(".btn2").click(function(){
    //     $("#p1").animate({height: "-=20px"});
    // });

});





// function carouselFunc() {
//     //Carousel
//     $('#projectCarousel').carousel('cycle');
//
//
// }


// // Enable Carousel Indicators
// $(".item").click(function () {
//     $("#projectCarousel").carousel(1);
// });
//
// // Enable Carousel Controls
// $('#projectCarousel > a.carousel-control-prev > span.carousel-control-prev-icon').on('click', function () {
//     $('#projectCarousel').carousel('next')
// });
// $(".right").click(function () {
//     $("#myCarousel").carousel("next");
// });