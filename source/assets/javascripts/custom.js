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

//Hide how-to measure and add margin to needs h2
    $('.read-more.pull-right').on('click', function() {
        $('.signal-teaser').show();
    });

//Trigger
    $('.follow-stock').on('click', function(e) {
        $(this).text(function(i, text){
            return text === 'Følg aktie' ? 'Følg ikke aktie' : 'Følg aktie';
        });

        $(this).toggleClass('unfollow-stock');
    });

});

