var $color = 0.5;

(function(timer1, timer2){
    $(window).scroll(function(){
        var $scrollDist = $(window).scrollTop(),
            $body = $('.scrollBar'),
            $html = $('html'),
            $header = $('.header'),
            $bannerMeta = $('.bannerMeta'),
            $bannerImg = $('.bannerImg');

        $bannerImg.css('transform','translateY('+$scrollDist/2+'px)'); 
        $bannerMeta.css('transform','translateY('+$scrollDist/3+'px)'); 
        if($(window).width()>550){
            $header.css('transform','translateY(-'+$scrollDist/2+'px)'); 
        }


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
    });
    $(window).resize(function(){
        var $header = $('.header');
        if($(window).width()<=550){
            $header.css('transform','translateY(0)');
        }
    })
})(jQuery);
