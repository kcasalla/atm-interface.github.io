$(document).ready(function(){
    // Actions
    var insertCard = $('#actions #card');

    $('#screen article').not(':first-child').hide();
    
    insertCard.click(function(){
        $(this).addClass('insert');
        $(this).find('p').hide();

        $(this).screenTransition('#initial-screen');
    });

    var initialScreenOptions = $('#initial-screen .content');
    // var cashWithdrawal = $('#cash-withdrawal-screen');

    // Cash withdrawal
    var cashWithdrawal = $('#cash-withdrawal-button');
    var balanceInquiry = $('#balance-inquiry-button');
    var changePin = $('#change-pin-button');

    initialScreenOptions.click(function(){ 
        if(!$(this).attr('#cash-withdrawal-button').data('clicked')) {
            console.log('asd');
        }
        // else if(!$(this).find('#balance-inquiry-button').data('clicked')) {
        //     console.log('asd');
        // }
        // else if(!$(this).find('#').data('clicked')) {
        //     console.log('asd');
        // }
    });
});