var ww = $(window).width()
if(ww>991) {
    $('html').addClass('pc')
} else {
    $('html').addClass('mobile')
}

$('#header .openbtn').on('click', function(){
    $(this).toggleClass('on')
    $(this).prevUntil('h1').toggleClass('on')
})

$('#nav .depth1 > li').hover(
    function(){
        if($('html').hasClass('pc')) {
            $(this).find('.depth2').stop().fadeIn()
        }
    },
    function(){
        if($('html').hasClass('pc')) {
            $(this).find('.depth2').stop().fadeOut()
        }
    }
)

$('#nav .depth2 > li').hover(
    function(){
        if($('html').hasClass('pc')) {
            $(this).find('.depth3').stop().fadeIn()
        }
    },
    function(){
        if($('html').hasClass('pc')) {
            $(this).find('.depth3').stop().fadeOut()
        }
    }
)

$('#header #nav .depth1 > li > a').on('click', function(){
    if($('html').hasClass('mobile')) {
        if ($(this).parent().hasClass('on')){
            $(this).parent().removeClass('on')
        } else {
            $(this).parent().addClass('on')
            $(this).parent().siblings().removeClass('on')
        }
        return false
    }
})