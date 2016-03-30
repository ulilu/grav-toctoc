/*global jQuery */
/*!
* FitText.js 1.2
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    // Store the window width
    var windowWidth = $(window).width();
    // console.log("original window-width =" + windowWidth);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function(ok) {

        // Check window width has actually changed and it's not just iOS triggering a resize event on scroll
        // Always run on initial call and orientationchange event
        if ($(window).width() != windowWidth | ok == true ) {
            console.log("firstrun =" + ok);
            
            // Update the window width for next time
            windowWidth = $(window).width();
            // console.log("NEW WINDOW-WIDTH =" + windowWidth);

            $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
        }
      };

      // Call once to set.
      resizer(true);

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);
    });

  };

})( jQuery );