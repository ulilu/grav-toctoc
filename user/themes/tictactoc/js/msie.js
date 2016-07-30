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
