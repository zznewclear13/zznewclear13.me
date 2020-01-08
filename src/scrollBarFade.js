
function youtubeVidScroll() {
	var wScroll = $(window).scrollTop();
	console.log(wScroll);
	//$('.video-strip').css('background-position','center -'+ wScroll +'px');
}

var $color = 0.5;

(function(timer1, timer2, timer3){
    $(window).scroll(function(){
        var $wScroll = $(window).scrollTop(),
            $animComponent = $('.animComponent'),
            $body = $('.scrollBar'),
            $html = $('html');
        if($wScroll!=0){
            clearTimeout(timer3);
            timer3 = setTimeout(function(){
                $animComponent.hide();
            }, 300);        
        }else{
            clearTimeout(timer3);
            $animComponent.show();}

        $body.addClass('scroll');
        $color = 0.5;
        $html.attr("style","--scrollColor:rgba(0,0,0,"+$color+")");

        clearTimeout(timer2);
        clearInterval(timer1);
        timer2 = setTimeout(function(){
            timer1 = setInterval(function(){
                if($color>0.01){
                    $color = $color - 0.01;
                    $html.attr("style","--scrollColor:rgba(0,0,0,"+$color+")");
                }else{clearInterval(timer1);}
            }, 10);
            //$body.removeClass('scroll');
        }, 1000);
    })
})(jQuery);
