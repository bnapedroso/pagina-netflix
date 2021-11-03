$(document).ready(function(){

    $('.img-responsive').on( "click", function() {
        $(this).animate({
        width:'70%',
        height:'70%'
        },1000);
        });

    $('.img-responsive').mouseout(function() {
        $(this).animate({
        width:'50%',
        height:'50%'
        },1000);
        });

});