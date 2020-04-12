$(document).ready(function() {
    let func = () => {
        $('.overlay').hide().animate(
            {
                opacity: 'toggle',
            },1000
        );
        $('.modal').animate(
            {
                height: 'toggle',
                // display: 'show',
            }, 1000
        );
    };

    $('[href="#sheldure"]').on('click', function() {
        func();
    });
    $('[href="#tour"]').on('click', function() {
        func();
    });
    $('.row div:last').on('click', function() {
        func();
    });
    $('.close').on('click', function() {
        func();
        $('.overlay').hide();
    });
});