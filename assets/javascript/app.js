$(document).ready(function(){
    $("#viewWork").click(function() {
        $('html,body').animate({
            scrollTop: $("#portfolioDiv").offset().top},
            'slow');
    });

    $("#contactBtn").click(function() {
        $('html,body').animate({
            scrollTop: $(".email").offset().top},
            'slow');
    });

});
