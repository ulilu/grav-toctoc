(function(t){function z(){for(var a=0;a<g.length;a++)g[a][0](g[a][1]);g=[];m=!1}function n(a,b){g.push([a,b]);m||(m=!0,A(z,0))}function B(a,b){function c(a){p(b,a)}function h(a){k(b,a)}try{a(c,h)}catch(d){h(d)}}function u(a){var b=a.owner,c=b.state_,b=b.data_,h=a[c];a=a.then;if("function"===typeof h){c=l;try{b=h(b)}catch(d){k(a,d)}}v(a,b)||(c===l&&p(a,b),c===q&&k(a,b))}function v(a,b){var c;try{if(a===b)throw new TypeError("A promises callback cannot return that same promise.");if(b&&("function"===
typeof b||"object"===typeof b)){var h=b.then;if("function"===typeof h)return h.call(b,function(d){c||(c=!0,b!==d?p(a,d):w(a,d))},function(b){c||(c=!0,k(a,b))}),!0}}catch(d){return c||k(a,d),!0}return!1}function p(a,b){a!==b&&v(a,b)||w(a,b)}function w(a,b){a.state_===r&&(a.state_=x,a.data_=b,n(C,a))}function k(a,b){a.state_===r&&(a.state_=x,a.data_=b,n(D,a))}function y(a){var b=a.then_;a.then_=void 0;for(a=0;a<b.length;a++)u(b[a])}function C(a){a.state_=l;y(a)}function D(a){a.state_=q;y(a)}function e(a){if("function"!==
typeof a)throw new TypeError("Promise constructor takes a function argument");if(!1===this instanceof e)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this.then_=[];B(a,this)}var f=t.Promise,s=f&&"resolve"in f&&"reject"in f&&"all"in f&&"race"in f&&function(){var a;new f(function(b){a=b});return"function"===typeof a}();"undefined"!==typeof exports&&exports?(exports.Promise=s?f:e,exports.Polyfill=e):"function"==
typeof define&&define.amd?define(function(){return s?f:e}):s||(t.Promise=e);var r="pending",x="sealed",l="fulfilled",q="rejected",E=function(){},A="undefined"!==typeof setImmediate?setImmediate:setTimeout,g=[],m;e.prototype={constructor:e,state_:r,then_:null,data_:void 0,then:function(a,b){var c={owner:this,then:new this.constructor(E),fulfilled:a,rejected:b};this.state_===l||this.state_===q?n(u,c):this.then_.push(c);return c.then},"catch":function(a){return this.then(null,a)}};e.all=function(a){if("[object Array]"!==
Object.prototype.toString.call(a))throw new TypeError("You must pass an array to Promise.all().");return new this(function(b,c){function h(a){e++;return function(c){d[a]=c;--e||b(d)}}for(var d=[],e=0,f=0,g;f<a.length;f++)(g=a[f])&&"function"===typeof g.then?g.then(h(f),c):d[f]=g;e||b(d)})};e.race=function(a){if("[object Array]"!==Object.prototype.toString.call(a))throw new TypeError("You must pass an array to Promise.race().");return new this(function(b,c){for(var e=0,d;e<a.length;e++)(d=a[e])&&"function"===
typeof d.then?d.then(b,c):b(d)})};e.resolve=function(a){return a&&"object"===typeof a&&a.constructor===this?a:new this(function(b){b(a)})};e.reject=function(a){return new this(function(b,c){c(a)})}})("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this);


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