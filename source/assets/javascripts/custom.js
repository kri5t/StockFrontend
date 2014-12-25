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
