// var  mn = $("navigation");
//     mns = "navigation--scrolled";
    // hdr = $('.header').height();

$(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 101) {
            $('.nav-bar').addClass('is-sticky');
        }
        else {
            $('.nav-bar').removeClass('is-sticky');
        }
    });
});