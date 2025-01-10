
$(function () {

    const MAINVISUALSLIDE = new Swiper('.main_visual_slide', {
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        effect: "creative",
        creativeEffect: {
            prev: {
                shadow: true,
                translate: ["-20%", 0, -1],
            },
            next: {
                translate: ["100%", 0, 0],
            },
        },

        navigation: {
            nextEl: '.main_visual .arrows .next',
            prevEl: '.main_visual .arrows .prev',
        },

    });

    const MAINEVENTSLIDE = new Swiper('.main_event_slide', {
        slidesPerView: 4,
        spaceBetween: 30,
    })

});

$(function () {
    const MMS = new Swiper('.main_menu_slide', {
        slidesPerView: 5,
        spaceBetween: 30,
        speed: 8000,
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
    });

});


$(function () {
    $('.main_content .best_tab_menu button').on('click', function () {
        let idx = $(this).parent().index();
        $('.main_content .best_tab_menu button').removeClass('on');
        $(this).addClass('on');
        $('.main_content .best_tab_content .con').removeClass('on');
        $('.main_content .best_tab_content .con').eq(idx).addClass('on')
    })
});


$(function () {
    const MIS = new Swiper('.main_interior_slide', {
        loop: true,

        navigation: {
            nextEl: '.main_interior .inner .itm_area .arrows .next',
            prevEl: '.main_interior .inner .itm_area .arrows .prev',
        },
        pagination: {
            clickable: true,
            el: '.main_interior .inner .itm_area .page',
        },
        on: {
            slideChangeTransitionStart: function () {
                console.log(this.realIndex);
                $('.main_interior .inner .desc_area .itm').removeClass('on');
                $('.main_interior .inner .desc_area .itm').eq(this.realIndex).addClass('on');
            }
        }
    })
});

$(function () {
    $('.popup .con .close').on('click', function () {
        $('.popup').hide();
    });

    $('.popup #ck').on('change', function () {
        $('.popup').hide();

    })

})

$(function () {
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1000)
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct);

        if (sct > 600) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    });

    $('#flk').on('change', function () {
        let lnk = $(this).val();
        if (lnk) window.open(lnk)
    })
})

$(function () {
    AOS.init();
})