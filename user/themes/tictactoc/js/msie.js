// if ( ! Modernizr.objectfit ) {


// if('objectFit' in document.documentElement.style === false) {

//   console.log("this be IE");

//   $('.image-row').each(function () {
//     console.log("found image-row");
//     var $container = $(this),
//         imgUrl = $container.find('img').prop('src');
//     if (imgUrl) {
//       console.log("found img src");
//       $container.find('a')
//         .css('backgroundImage', 'url(' + imgUrl + ')')
//         .addClass('compat-object-fit');
//     }  
//   });
// }