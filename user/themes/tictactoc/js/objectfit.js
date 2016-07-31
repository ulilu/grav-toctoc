/*
 *  Polyfill to add leverage background-position to imitate object-fit
 *  https://pawelgrzybek.com/image-tag-vs-background-property/
 *  http://codepen.io/pawelgrzybek/pen/Rrybqg
 *
 *  Needed for ios Safari & Chrome < 8, Android < 4.4.4, Safari < 7.1 
 *  and ALL IE / IE Mobile / EDGE Browser.
 *
 *  Alternative script: https://github.com/bfred-it/object-fit-images
 *  Didn't seem to work upon testing in Windows Phone w/ Browserstack
 */
document.addEventListener("DOMContentLoaded", function(event) { 

  // Detect objectFit support
  if('objectFit' in document.documentElement.style === false) {


    /*
     *  Stage image on example pages
     */
    if ( document.querySelector('.stage__img') ) {

      // assign HTMLCollection with parents of images with objectFit to variable
      var stage = document.querySelector('.stage__img');

      console.log("stage__img = " + document.querySelector('.stage__img'));
        
      // Assign image source to variable
      var imageSource = stage.querySelector('img').getAttribute("src");

      // Assign image source to variable
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
    }  



    /*
     *  Card image on example list page / homepage / service page
     *  Image row images on example page
     */
    if ( document.querySelector('.card__img') ) {

      console.log("card__img = " + document.querySelector('.card__img'));

      var container = document.querySelectorAll('.card__img');
      
      // Loop through HTMLCollection
      for(var i = 0; i < container.length; i++) {
        
        // Assign image source to variable
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



    if ( document.querySelector('.cell-image__frame') ) {

      console.log(".cell-image__frame = " + document.querySelector('.cell-image__frame'));

      var container = document.querySelectorAll('.cell-image__frame');
      var imageSource = "";

      // Loop through HTMLCollection
      for(var i = 0; i < container.length; i++) {
        
        if ( container[i].querySelector('img').getAttribute("src") ) {
        // Assign image source to variable
          imageSource = container[i].querySelector('img').getAttribute("src"); 
        } else {
          imageSource = container[i].querySelector('img').getAttribute("data-src"); 
        }
        
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



    if ( document.querySelector('.cell__img') ) {

      console.log(".cell__img = " + document.querySelector('.cell__img'));

      var container = document.querySelectorAll('.cell__img');

      // Loop through HTMLCollection
      for(var i = 0; i < container.length; i++) {
        
        var imageSource = container[i].querySelector('img').getAttribute("src"); 
        
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
        
        // Assign image source to variable
        var imageSource = container[i].querySelector('img').getAttribute("data-src");
        
        // Hide image
        container[i].querySelector('img').attribute.src = imageSource;
        
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