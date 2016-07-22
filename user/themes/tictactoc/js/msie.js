// if ( ! Modernizr.objectfit ) {


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
    if( document.querySelector('.stage__img') ) {

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
    }


    /*
     *  Card image on example list page / homepage / service page
     *  Image row images on example page
     */
    // assign HTMLCollection with parents of images with objectFit to variable
    var container = document.querySelectorAll('.hero__bg, .card__img');
    
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
  else {
    // You don't have to worry
    console.log('No worries, your browser supports objectFit')
  }

});