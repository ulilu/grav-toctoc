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
   *  Enabling all inline JS-blocks (= Lightslider), by cloning / appending 
   *  them to the body and setting the correct type "text/javascript".
   *  as seen in: https://stackoverflow.com/questions/20180556/defer-inline-javascript-execution
   */
  $(function() {
    $("script[type='text/example']").each(function() {
        $(this).clone().attr("type","text/javascript").appendTo("body"); 
    });
  });

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


  // the animation slide-duration corresponds with values in the css 
  // that set the fading bg-color
  var accordionSlide = function() {

    // hide all answers, except the first one
    $('.faq-answer').not(':eq(0)').hide();


    $('.faq-question').click(function(){

      var currentQ = $(this);
      var currentA = $(this).next('.faq-answer');
      var lastQ    = $('.faq-question.is-open');
      var lastA    = lastQ.next('.faq-answer');

      // only slide if the click is on a different question than last time
      if ( this !== lastQ.get(0) ) {
        lastQ.addClass('is-closing').removeClass('is-open');
        currentQ.addClass('is-open');

        lastA.removeClass('is-visible').addClass('is-closing').slideUp({
            duration: 400,
            queue: false,
            complete: function () {
              // change class when slide finishes
              // remove classes, used for css-keyframe-animations
              $(this).removeClass('is-closing');
              lastQ.removeClass('is-closing');
            }
          });
        currentA.addClass('is-visible').slideDown(400);
      }
    });

  }

  accordionSlide();


  /*
   *  Providing filter functionality to .cards collections.
   *  
   */
  $(function(){
    var $optionSets = $('.filter');
    var $optionLinks = $optionSets.find('a');
    var $notCurrentCategory;

    $optionLinks.click(function(e){

      var $this = $(this);
      // don't proceed if already selected
      if ( $this.hasClass('js-selected') ) {
        e.preventDefault();
      }

      var $optionSet = $this.parents('.filter');
      $optionSet.find('.js-selected').removeClass('js-selected');
      $this.addClass('js-selected');


      var $currentCategory = $this.attr('data-category-name');
      var $categorySet = $this.parents('.filter').siblings('.cards');

      if ( $notCurrentCategory ) {
        $notCurrentCategory.appendTo( $categorySet );
      }

      if ( $currentCategory == 'js-category-all') { 
        $notCurrentCategory.appendTo( $categorySet );
      } else {
        $notCurrentCategory = $('.card:not([data-partner-category="'+ $currentCategory + '"])');
        $notCurrentCategory.detach();
      }

      e.preventDefault();
    });       
  });



  /*
   * Trigger "plus de details / moins de details" in .category-content on list pages
   */
  $(function(){
    $(".js-show-info").click(function(e) {
        $(this).closest(".js-info-toggler").nextAll(".js-info-to-toggle:first").toggle().addClass('is-shown');
        $(this).siblings(".js-hide-info").css('display','inline-block');
        $(this).css('display','none');
        e.preventDefault();
    });
    $(".js-hide-info").click(function(e) {
        $(this).closest(".js-info-toggler").nextAll(".js-info-to-toggle:first").hide().toggleClass('is-shown');
        $(this).siblings(".js-show-info").css('display','inline-block');
        $(this).css('display','none');
        e.preventDefault();
    });
  });


  jQuery(".row-with-title figcaption").fitText(0.4, { minFontSize: '24px', maxFontSize: '42px' });



  var $timeline_block = $('.timeline-row, .block--cta');

  //hide timeline blocks which are outside the viewport
  $timeline_block.each(function(){
    if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.90) {
      $(this).find('.timeline-row__img, .timeline-row__info, .headline--cta').addClass('is-hidden');
    }
  });

  //on scolling, show/animate timeline blocks when enter the viewport
  $(window).on('scroll', function(){
    $timeline_block.each(function(){
      if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.90 && $(this).find('.timeline-row__img, .headline--cta').hasClass('is-hidden') ) {
        $(this).find('.timeline-row__img, .timeline-row__info, .timeline-row__info, .headline--cta').removeClass('is-hidden').addClass('bounce-in');
      }
    });
  });


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