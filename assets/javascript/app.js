$(document).ready(function(){
    $("#viewWork").click(function() {
        $('html,body').animate({
            scrollTop: $("#portfolioItems").offset().top},
            'slow');
    });
});

