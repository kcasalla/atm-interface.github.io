$(document).ready(function(){
    // Actions
    var insertCard = $('#actions #card');
    var keypadOption = $('#keypad');

    $('#screen article').not(':first-child').hide();
    
    insertCard.click(function(){
        $(this).addClass('insert');
        $(this).find('p').hide();

        $(this).screenTransition('#initial-screen');
    });

    keypadOption.find('.cancel').click(function(e){
        e.preventDefault();
        $(this).screenTransition('#welcome-screen');

        insertCard.removeClass('insert');
        insertCard.find('p').show();
    });

    keypadOption.find('.clear').click(function(e){
        e.preventDefault();
        console.log('clear');
    });

    keypadOption.find('.enter').click(function(e){
        e.preventDefault();
        console.log('enter');
    });


    // // Screens
    var initialScreenOptions = $('#screen #initial-screen');

    initialScreenOptions.find('#cash-withdrawal-button').click(function(){
        $(this).screenTransition('#cash-withdrawal-screen', '.account-option-screen');
    });

    initialScreenOptions.find('#balance-inquiry-button').click(function(){
        $(this).screenTransition('#balance-inquiry-screen', '.account-option-screen');
    });

    initialScreenOptions.find('#change-pin-button').click(function(){
        $(this).screenTransition('#pin-code-screen', '.old-pin');
    });
});