(function( $ ){
    $.fn.screenTransition = function(screen,option) {
        var atmInterface = $('#screen');
        var mainOption = $('.main-option');

        atmInterface.find(screen).show().siblings().hide();

        if(mainOption.is(':visible')) {
            mainOption.find(option).fadeIn(800).siblings().fadeOut(80);
        }
    };
 })( jQuery );