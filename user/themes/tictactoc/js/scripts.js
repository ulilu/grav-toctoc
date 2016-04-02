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


  /*
   * Center active menu item
   */

  var activeMenu = function() {
    
    if ( $('.main-nav__item.active').length ) {

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

    }
    
  };

  activeMenu();


  $('.main-nav__link').click(function(){
    $('.main-nav__item.active').removeClass("active");
    $(this).addClass("active");
  });



  jQuery(".row-with-title figcaption").fitText(0.4, { minFontSize: '24px', maxFontSize: '42px' });


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
     * Button scroll block
     */

    if ( $('.js-scrollblock').length ) {
      var firstItem = $('a.card:first-of-type');
      var fip = firstItem.position().left;
      var fipi = fip; // initial offset for first card
    }

    $('.js-scrollblock').click(function(){
      var wrapper = $('.block__scroll-wrapper');
      var ww = wrapper[0].scrollWidth;
      var sw = $( window ).width();
      var $this = $(this);


        if ( $this.hasClass( "reverse" ) ) {

          wrapper.animate({ scrollLeft: "-=" + (sw - (fipi / 2) ) },
            { complete: function(){
                var fip = firstItem.position().left;
                // console.log("new fip = " + ( -fip - fipi ));

                if ( ( fip - fipi ) == 0 ) {
                  $this.toggleClass("reverse");
                }
              }
            },
          500);

        } else {

          wrapper.animate({ scrollLeft: "+=" + (sw - (fipi / 2) ) },
            { complete: function(){
                var fip = firstItem.position().left;
                // console.log("new fip = " + ( -fip + fipi ));
                // console.log("result = " + (( -fip + fipi) >= ( ww - sw )) );

                if ( ( -fip + fipi) == ( ww - sw )  ) {
                  $this.toggleClass("reverse");
                }
              }
            }, 
          500);
        }

        // console.log( "firstitem position - firstitem initial position = " + (fip - fipi) );
        // console.log( "wrapperwidth - screenwidth = " + (ww - sw) );
        // document.activeElement = null;
    });

});