/**
 * Created by allanlarsen on 26/10/14.
 */

//Activate bootstrap tooltip
$('document').ready(function () {
    $('[data-toggle="tooltip"]').tooltip();

//Hide how-to measure and add margin to needs h2
    $('.read-more').on('click', function() {
        $(this).parent().hide();
    });

});

// smooth scroll snippet on #[hashtaglink] *OBS! Will collide with tabbed content
//$('a[href*=#]:not([href=#])').click(function() {
//    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
//        || location.hostname == this.hostname) {
//
//        var target = $(this.hash);
//        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//        if (target.length) {
//            $('html,body').animate({
//                scrollTop: target.offset().top
//            }, 1000);
//            return false;
//        }
//    }
//});

// Hide Header on on scroll down
//var didScroll;
//var lastScrollTop = 0;
//var delta = 5;
//var navbarHeight = $('.global-menu').outerHeight();
//
//$(window).scroll(function(event){
//    didScroll = true;
//});
//
//setInterval(function() {
//    if (didScroll) {
//        hasScrolled();
//        didScroll = false;
//    }
//}, 250);
//
//function hasScrolled() {
//    var st = $(this).scrollTop();
//
//    // Make sure they scroll more than delta
//    if(Math.abs(lastScrollTop - st) <= delta)
//        return;
//
//    // If they scrolled down and are past the navbar, add class .nav-up.
//    // This is necessary so you never see what is "behind" the navbar.
//    if (st > lastScrollTop && st > navbarHeight){
//        // Scroll Down
//        $('.global-menu').removeClass('nav-down').addClass('nav-up');
//    } else {
//        // Scroll Up
//        if(st + $(window).height() < $(document).height()) {
//            $('.global-menu').removeClass('nav-up').addClass('nav-down');
//        }
//    }
//
//    lastScrollTop = st;
//}