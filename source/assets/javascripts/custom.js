/**
 * Created by allanlarsen on 26/10/14.
 */

//Activate bootstrap tooltip
$('document').ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('.datepicker').datepicker();

    //Show signal
    $('.read-more').on('click', function(e) {
        $(this).text(function(i, text){
            return text === 'læs mere' ? 'skjul' : 'læs mere';
        });
    });

    //Follow stock
    $('.follow-stock').on('click', function(e) {
        $(this).text(function(i, text){
            return text === 'Følg aktie' ? 'Følg ikke aktie' : 'Følg aktie';
        });

        $(this).toggleClass('unfollow-stock');
    });

});

