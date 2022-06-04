jQuery(document).ready(function($) {

    'use strict';

    //*** Function Banner Six
    jQuery('.intro-banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        dots: false,
        prevArrow: "<span class='slick-arrow-left'><i class='careerfy-icon careerfy-right-arrow'></i></span>",
        nextArrow: "<span class='slick-arrow-right'><i class='careerfy-icon careerfy-right-arrow'></i></span>",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
}