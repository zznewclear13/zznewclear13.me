(function ($){
	"use strict"

	var $mobileNavToggleBtn = $('.mobile-nav-toggle');

	function onBtnClick(e){
		var $this = $(this),
			$selectors = $('.mobile-nav');
		$this.toggleClass('is-open');
		$selectors.toggleClass('is-open');
	}

	$(document).ready(function(){
		$mobileNavToggleBtn = $('.mobile-nav-toggle');
		
		$mobileNavToggleBtn.on('click', onBtnClick);
    });
    
    $(window).resize(function(){
        if($(window).width()>550){
            $('.mobile-nav-toggle, .mobile-nav').removeClass('is-open');
            console.log('remove class');
        }
    })
})(jQuery);
