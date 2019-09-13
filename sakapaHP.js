function slide() {
    if($('.toggle-icon').hasClass('toggle-icon-change')) {
        $('.toggle-icon').removeClass('toggle-icon-change');
    }else {
        $('.toggle-icon').addClass('toggle-icon-change');
    }

    $('.header-container').slideToggle();
}
