$(function(){
    smoothScrool(300);
});

function smoothScrool (duration) {
    $('a[href^="#"]').on('click', function(event){
        var target = $($(this).attr('href')),
            $mobileNav = $('.mobile-nav, .mobile-nav-toggle');
        $mobileNav.removeClass('is-open');

        if(target.length){
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, duration);
        }
    });
}