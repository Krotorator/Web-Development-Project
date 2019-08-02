window.onload = function() {

    $('.person').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    })

    var $grid = $('.portfolio__items').isotope({
        itemSelector: '.portfolio__item',
        layoutMode: 'fitRows',
        fitWidth: true
    });

    $('.portfolio__btn').on('click', function (e) {
        e.preventDefault();

        $('.portfolio__btn--active').removeClass('portfolio__btn--active');
        $(this).addClass('portfolio__btn--active');

        var myFilter = $(this).attr('data-filter');
        if (myFilter !== '*') {
            myFilter = '.' + myFilter;
        }
        console.log(myFilter);
        $grid.isotope({ filter: myFilter });
    });

    var menuToggle = $('.toggle-nav');
    var heading = $('.heading');
    var scrollUp = $('.header__arrow--up');

    // MENU
    menuToggle.removeAttr("disabled");

    menuToggle.on('click', function() {
       heading.toggleClass('active');
        menuToggle.toggleClass('toggle-nav--active');
 
    })


    // SCROLL UP
    scrollUp.removeClass('animate');
    scrollUp.fadeOut();
    scrollUp.on('click', function() {
        scrollUp.addClass('animate');
       setTimeout(remove, 2000)
    })

    function remove () {
        scrollUp.removeClass('animate');
    }

    $(window).scroll(function () {
        // console.log($(window).scrollTop())

        if ($(window).scrollTop() > 600) {
            scrollUp.fadeIn();
        } else {
            scrollUp.fadeOut();
        }

        if ($(window).scrollTop() > 320) {
           heading.removeClass('active');
            menuToggle.removeClass('toggle-nav--active');
        } 
    })

}