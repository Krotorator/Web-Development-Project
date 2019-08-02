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

    // $('.portfolio__items').isotope({
    //     // set itemSelector so .grid-sizer is not used in layout
    //     itemSelector: '.portfolio__item',
    //     percentPosition: true,
    //     masonry: {
    //         // use element for option
    //         columnWidth: '.grid-sizer'
    //     }
    // })

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

    $('.toggle-nav').on('click', function() {
        $('.heading').toggleClass('active');
        $('.toggle-nav').toggleClass('toggle-nav--active');
        setTimeout(close, 4000);
    })

    function close () {
        $('.heading').removeClass('active');
        $('.toggle-nav').removeClass('toggle-nav--active');
    }

    $('.header__arrow--up').removeClass('animate');

    $('.header__arrow--up').on('click', function() {
        $('.header__arrow--up').addClass('animate');
       setTimeout(remove, 2000)
    })

    function remove () {
        $('.header__arrow--up').removeClass('animate');
    }

}