// var  mn = $("navigation");
//     mns = "navigation--scrolled";
    // hdr = $('.header').height();

// $(function(){
//     $(window).scroll(function() {
//         if ($(this).scrollTop() >= 101) {
//             $('.nav-bar').addClass('is-sticky');
//         }
//         else {
//             $('.nav-bar').removeClass('is-sticky');
//         }
//     });
// });

/*
 * Document ready start
 */

$(document).ready(function() {

  jQuery(".image-row-text figcaption").fitText(0.5, { minFontSize: '18px', maxFontSize: '48px' });

  // Move tapped menu item to the left
  // var nav = $('.main-nav');
  // var scrollleft = nav.scrollLeft();
  // var offset = $(this).offset();
  // var offsetleft = offset.left;
  // var elementwidth = $(this).width();
  // var screenwidth = $(window).width();
  // nav.animate({scrollLeft:  (offsetleft + scrollleft) + (elementwidth /2) - (screenwidth / 2)}, 200);

    /*
     * Button scroll to top
     */
    var id = 'js-scrolltop';
    $('.' + id).click(function(){
        $('html, body').animate({ scrollTop: 0 }, 150);
    });
    window.onscroll = function () {
        if(window.pageYOffset < 1000) {
            $('.' + id).fadeOut(300);
        }
        else {
            $('.' + id).fadeIn(300);
        }
    }

		/*
     * Button scroll menu
     */
    $('.js-scrollmenu').click(function(){
        if ( $( this ).hasClass( "active" ) ) {
        	$('.main-nav').animate({ scrollLeft: "-=350" }, 350);
        	$( this ).toggleClass("active");
				} else {
        	$('.main-nav').animate({ scrollLeft: "+=350" }, 350);
        	$( this ).toggleClass("active");
        }
    });


    /*
     * Center active menu item
     */

		var navi = $('.main-nav');
    var target = $('.main-nav__item.active'); 

    var w = navi.width();
		// console.log("navi.width = " + w );

		var x = navi[0].scrollWidth;
		// console.log("navi.scrollwidth = " + x );
		
		var y = target.outerWidth(true);
		// console.log("target.outerWidth = " + y );

		var p = target.position().left;
		// console.log("target.position = " + p );

		var t = (((w / 2) - (y / 2)) - p); 
		// console.log("move by = " + t );

		navi.scrollLeft( -t );


		$('.main-nav__link').click(function(){
			$('.main-nav__item.active').removeClass("active");
			$(this).addClass("active");
		});
});