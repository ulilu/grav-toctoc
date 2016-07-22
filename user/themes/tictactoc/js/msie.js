// if ( ! Modernizr.objectfit ) {

/*
 *  HOT DANG! Apparently, IE9 doesn't understand console.log per se.
 *  Unless you open the dev tools - after that all is good. 
 *  Found the following articles and fixes:
 *  http://thisbythem.com/blog/whats-up-with-the-js-console-in-ie9/
 *  https://stackoverflow.com/questions/5472938/does-ie9-support-console-log-and-is-it-a-real-function
 */
if (!window.console) window.console = {};
if (!window.console.log) window.console.log = function () { };


/*
 *  Polyfill to add leverage background-position to imitate object-fit
 *  https://pawelgrzybek.com/image-tag-vs-background-property/
 *  http://codepen.io/pawelgrzybek/pen/Rrybqg
 *
 *  Alternative script: https://github.com/bfred-it/object-fit-images
 *  Didn't seem to work upon testing in Windows Phone w/ Browserstack
 */
document.addEventListener("DOMContentLoaded", function(event) { 

  // Detect objectFit support
  if('objectFit' in document.documentElement.style === false) {


    /*
     *  Stage image on example page
     */
    if ( document.querySelector('.stage__img') ) {

      // assign HTMLCollection with parents of images with objectFit to variable
      var stage = document.querySelector('.stage__img');

      console.log("stage__img = " + document.querySelector('.stage__img'));
        
      // Asign image source to variable
      var imageSource = stage.querySelector('img').src;

      // Asign image source to variable
      var imageAlign = stage.querySelector('img').className;
      if( !imageAlign ){ imageAlign = 'center';}
      
      // Hide image
      stage.querySelector('img').style.opacity = '0';
      
      // Add background-size: cover
      stage.style.backgroundSize = 'cover';
      
      // Add background-image: and put image source here
      stage.style.backgroundImage = 'url(' + imageSource + ')';
      
      // Add background-position: center center
      stage.style.backgroundPosition = 'center '+ imageAlign;

    /*
     *  Card image on example list page / homepage / service page
     *  Image row images on example page
     */
    // assign HTMLCollection with parents of images with objectFit to variable

    }  

    if ( document.querySelector('.hero__bg') ) {

      console.log("hero__bg = " + document.querySelector('.hero__bg'));

      var container = document.querySelectorAll('.hero__bg');
      
      // Loop through HTMLCollection
      for(var i = 0; i < container.length; i++) {
        
        // Asign image source to variable
        var imageSource = container[i].querySelector('img').src;
        
        // Hide image
        container[i].querySelector('img').style.opacity = '0';
        
        // Add background-size: cover
        container[i].style.backgroundSize = 'cover';
        
        // Add background-image: and put image source here
        container[i].style.backgroundImage = 'url(' + imageSource + ')';
        
        // Add background-position: center center
        container[i].style.backgroundPosition = 'center center';
      }

    }

    if ( document.querySelector('.card__img') ) {

      console.log("card__img = " + document.querySelector('.card__img'));

      var container = document.querySelectorAll('.card__img');
      
      // Loop through HTMLCollection
      for(var i = 0; i < container.length; i++) {
        
        // Asign image source to variable
        var imageSource = container[i].querySelector('img').getAttribute("data-src");
        
        // Hide image
        container[i].querySelector('img').style.opacity = '0';
        
        // Add background-size: cover
        container[i].style.backgroundSize = 'cover';
        
        // Add background-image: and put image source here
        container[i].style.backgroundImage = 'url(' + imageSource + ')';
        
        // Add background-position: center center
        container[i].style.backgroundPosition = 'center center';
      }

    } 

    if ( document.querySelector('.cell-image') ) {

      console.log("cell-image = " + document.querySelector('.cell-image'));

      var container = document.querySelectorAll('.cell-image');
      
      // Loop through HTMLCollection
      for(var i = 0; i < container.length; i++) {
        
        // Asign image source to variable
        var imageSource = container[i].querySelector('img').getAttribute("data-src");
        
        // Hide image
        container[i].querySelector('img').style.opacity = '0';
        
        // Add background-size: cover
        container[i].style.backgroundSize = 'cover';
        
        // Add background-image: and put image source here
        container[i].style.backgroundImage = 'url(' + imageSource + ')';
        
        // Add background-position: center center
        container[i].style.backgroundPosition = 'center center';
      }

    }

    if ( document.querySelector('.image-row a') ) {

      console.log("image-row a = " + document.querySelector('.image-row a'));

      var container = document.querySelectorAll('.image-row a');
      
      // Loop through HTMLCollection
      for(var i = 0; i < container.length; i++) {
        
        // Asign image source to variable
        var imageSource = container[i].querySelector('img').getAttribute("data-src");
        
        // Hide image
        container[i].querySelector('img').style.opacity = '0';
        
        // Add background-size: cover
        container[i].style.backgroundSize = 'cover';
        
        // Add background-image: and put image source here
        container[i].style.backgroundImage = 'url(' + imageSource + ')';
        
        // Add background-position: center center
        container[i].style.backgroundPosition = 'center center';
      }
    }

  } else {
    // You don't have to worry
    console.log('No worries, your browser supports objectFit')
  }

});