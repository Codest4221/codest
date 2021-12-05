const navSlide = () => {
    const burger =document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav li');
   

burger.addEventListener('click',()=>{
   nav.classList.toggle('nav-active');

   navLinks.forEach((link,index) => {
       if (link.style.animation) {
           link.style.animation = '';

       } else {
           link.style.animation ='navLinkFade 0.5s ease forwards  ${index / 7 + 0.3}s';
       }
   });






        burger.classList.toggle('toggle');
    });


  
}
 navSlide();




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