
/*
 * Document ready start
 */

$(document).ready(function() {

  /*! cookie function. get, set, or forget a cookie. [c]2014 @scottjehl, Filament Group, Inc. Licensed MIT */

  function createCookie(name,value,days) {
    if (days) {
      var date = new Date();
      date.setTime(date.getTime()+(days*24*60*60*1000));
      var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
  }
      


  var html = document.documentElement;
  html.classList.add('fonts-loading');

  var light = new FontFaceObserver('Linotte-Light', {
      weight: 400
  });
  var regular = new FontFaceObserver('Linotte-Regular', {
      weight: 400
  });
  var semibold = new FontFaceObserver('Linotte-Semibold', {
      weight: 400
  });
  var fontawesome = new FontFaceObserver('FontAwesome', {
      weight: 400
  });


  Promise.all([
    light.load(null, 5000),
    regular.load(null, 5000),
    semibold.load(null, 5000)
  ]).then(function () {
    console.log('Linotte light, regular & semibold have loaded');
    fontawesome.load(null, 5000).then(function () {  
      console.log('Fontawesome has loaded');
      html.classList.remove('fonts-loading');
      html.classList.add('fonts-loaded');
      createCookie('fonts-loaded', '1', 1); 
      /* sessionStorage.fontsLoaded = true; */
    }).catch(function () {
      console.log('Fontawesome loading failed, using fallback font');
      html.classList.remove('fonts-loading');
      html.classList.add('fonts-failed');
      /* sessionStorage.fontsLoaded = false; */
    });
  });


  /*
   *  Enabling all inline JS-blocks (= Lightslider), by cloning / appending 
   *  them to the body and setting the correct type "text/javascript".
   *  as seen in: https://stackoverflow.com/questions/20180556/defer-inline-javascript-execution
   */

/*
  $(function() {
    $("script[type='text/example']").each(function() {
        $(this).clone().attr("type","text/javascript").appendTo("body"); 
    });
  });
*/




  /*
   * Center active menu item
   */

  var activeMenu = function() {
    
    if ( $('.nav__item.active').length ) {

      var navi = $('.main-nav');
      var target = $('.nav__item.active'); 

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



  // Sticky header via headroom.js
  // https://github.com/WickyNilliams/headroom.js
  // http://wicky.nillia.ms/headroom.js/
$("nav").headroom({
  "offset": 90,
  "tolerance": 5,
  "classes": {
    "initial": "animated",
    "pinned": "swingInX",
    "unpinned": "swingOutX"
  }
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
      	$('.main-nav').animate({ scrollLeft: "-=450" }, 350);
      	$( this ).toggleClass("active");
			} else {
      	$('.main-nav').animate({ scrollLeft: "+=450" }, 350);
      	$( this ).toggleClass("active");
      }
  });

  /*
   * Button scroll block
   */



  var scrollContents = function() {

    // if ( $('.js-scrollblock').length ) {
      var wrapper = $('.block__scroll-wrapper');
      var firstItem = $('a.card:first-of-type');
      var fip = firstItem.position().left;
      var fipi = fip; // initial offset for first card
      console.log("first ever fipi = " + fipi);
    // }




    $('.js-scrollblock').click(function(){
      var ww = wrapper[0].scrollWidth;
      console.log("wrapper scrollWidth = " + ww);
      var sw = $( window ).width();
      console.log("window width = " + sw);
      var $this = $(this);


      if ( $this.hasClass( "reverse" ) ) {


        wrapper.animate({ scrollLeft: "-=" + (sw - (fipi / 2) ) },
          { complete: function(){
              var fip = firstItem.position().left;
              console.log("new fip after scroll left = " + ( -fip - fipi ));

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
              console.log("new fip after scroll right = " + ( -fip + fipi ));
              console.log("result = " + (( -fip + fipi) >= ( ww - sw )) );

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
  }

  scrollContents();


/*
 *
 *  Resize-Listener
 */

  // var resizeTimer;

  // $(window).on('resize', function(e) {

  //   clearTimeout(resizeTimer);
  //   resizeTimer = setTimeout(function() {

  //   if ( $('.js-scrollblock').length ) {
  //     fip = $('a.card:first-of-type').position().left;
  //     console.log("FIP after resize = " + fip);
  //   }

  //   scrollContents(fip);
              
  //   }, 2000);

  // });


  // $(window).resize(function() {
  //   clearTimeout(window.resizedFinished);
  //   window.resizedFinished = setTimeout(function(){
  //     if ( $('.js-scrollblock').length ) {
  //       fip = $('a.card:first-of-type').position().left;
  //       console.log('Resized finished.');
  //       console.log("FIP after resize = " + fip);
  //       scrollContents(fip);
  //     }
  //   }, 250);
  // });

  // var screen = window; //To access the dom only once
  var cWidth = $( window ).width();
  var newWidth = cWidth; //If you want a log to show at startup, change to: newWidth = 0
  console.log("Initial newWidth:", newWidth);


  $(window).resize(function() {
    clearTimeout(window.resizedFinished);
    window.resizedFinished = setTimeout(function(){

      newWidth = $( window ).width();
      console.log("New newWidth in window.resize:", newWidth);
      console.log("cWidth in window.resize:", cWidth);
      if(cWidth != newWidth){
          cWidth = newWidth;
          console.log("clientWidth:", cWidth); //instead of alert(cWidth);
          // fip = $('a.card:first-of-type').position().left;

          scrollContents();
       };

    }, 500);
  });

});