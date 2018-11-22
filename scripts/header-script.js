$('.navbar').fadeIn(1500);


$(".menu-anchor").hover(function () {
    $(this).animate({ fontSize: "+=5px" });
    $(".menu-anchor").css({ color: 'grey' });
    $(this).css({ color: 'white' });


}, function () {
    $(this).animate({ fontSize: "-=5px" });
    $(".menu-anchor").css("color", "white");
    $(this).css({ 'color': 'white' });
});