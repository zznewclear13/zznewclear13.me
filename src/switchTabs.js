$(function(){
    showContent();
});

function showContent(){
    //$('.article-wrap.research').addClass('activated');
    $('.dynamicTabs').click(function(){
        var $this = $(this),
            $current = $('.dynamicTabs.is-active'),
            $thisClassName = $this.attr('class').split(' ')[1],
            $currentClassName = $current.attr('class').split(' ')[1],
            $index = $this.parent().children().index($this),
            $thisArticle = $('.vueArticle.'+$thisClassName),
            $currentArticle = $('.vueArticle.'+$currentClassName);
        if($thisClassName!=$currentClassName){
            $current.removeClass('is-active');
            $this.addClass('is-active');
            $currentArticle.hide(300);
            $thisArticle.css('display','grid');
            $('articles').css('transform','translateX(-'+$index*33.33+'%)');
        }
    })
}