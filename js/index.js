let article5Near = $('.article5').offset().top + $('.article5').outerHeight()/5
let article7Near = $('.article7').offset().top + $('.article7').outerHeight()/5

$(window).on('scroll', function(){
    let sct = $(this).scrollTop() + $(this).height();
    if (sct>=article5Near) {
        $('.article5').addClass('on')
    } else {
        $('.article5').removeClass('on')
    }
    if (sct>=article7Near) {
        $('.article7').addClass('on')
    } else {
        $('.article7').removeClass('on')
    }
})