// if ( ! Modernizr.objectfit ) {


if('objectFit' in document.documentElement.style === false) {

  alert("this be IE");

  $('.image-row a').each(function () {
    alert("found image-row a");
    var $container = $(this),
        imgUrl = $container.find('img').prop('src');
    if (imgUrl) {
      alert("found img src");
      $container
        .css('backgroundImage', 'url(' + imgUrl + ')')
        .addClass('compat-object-fit');
    }  
  });
}