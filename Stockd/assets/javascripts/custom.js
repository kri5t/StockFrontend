/**
 * Created by allanlarsen on 26/10/14.
 */

// smooth scroll snippet on #[hashtaglink]
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});

//modal load on windowload
$(window).load(function(){
    //$('#location-modal').modal('show');
});