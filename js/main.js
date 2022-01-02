const selectElement = (element) => document.querySelector(element);

selectElement( element= '.menu-icon'),addEventListener(type='click', listener= () => {
  selectElement(element= 'nav').classList.toggle( token= 'active');
});


const responsive = {
    0: {
        items:1
    },
    320: {
        items: 1
    },
    
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}

$(document).ready(function () {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** click event on toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })

    // owl-crousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 1000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive:responsive
    });


    // click to scroll top
    $('.move-up span').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })


    // AOS Instance
    AOS.init();

});