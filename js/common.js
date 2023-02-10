var deviceSize = 1024
function scrollOX(status) {
    $('html').css({
        overflowY: status
    })
    return $('html').width()
}

var scX = scrollOX('hidden')
var scO = scrollOX('scroll')
var scD = scX - scO

if (scD > 0) {
    deviceSize = deviceSize - scD
}

let ww = $(this).width()
if (ww > deviceSize) {
    $('html').addClass('pc')
} else if (ww <= deviceSize) {
    $('html').addClass('mobile')
}
$(window).on('resize', function () {
    let ww = $(this).width()
    if (ww > deviceSize && !$('html').hasClass('pc')) {
        $('html').addClass('pc').removeClass('mobile')
        location.reload()
    } else if (ww <= deviceSize && !$('html').hasClass('mobile')) {
        $('html').addClass('mobile').removeClass('pc')
        location.reload()
    }
})

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

$(window).scroll(function(){
    let sct = $(this).scrollTop()
    if (sct>100) {
        $('#gotop').fadeIn(300)
    } else {
        $('#gotop').fadeOut(300)
    }
}) 

$('#gotop a').on('click', function(){
    $('html').animate({
        scrollTop:'0'
    }, 300)
    return false
})

$(window).on('load', function(){

    let count = 0;
    let timer = setInterval(add, 25)

    function add() {
        count++
        if(count>=100){ 
            clearInterval(timer) 
            $('.introAni').animate({
                opacity: "0"
            }, 500, function(){
                $(this).hide()
            })
        }
    }
})