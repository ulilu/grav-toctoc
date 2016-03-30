// if ( ! Modernizr.objectfit ) {


// Detect objectFit support
if('objectFit' in document.documentElement.style === false) {
  
  // assign HTMLCollection with parents of images with objectFit to variable
  var container = document.getElementsByClassName('image-row').getElementsByTagName('a');

  alert(container);
  
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