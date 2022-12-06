$(document).ready(function () {
    var toggleTopMenuIcon = $(".menu-mob");
    var topMenu = $(".menu-header");

    $(toggleTopMenuIcon).click(function () {
        topMenu.toggleClass('menu-mobile');
        $('.nav-header').toggleClass('background-nav');
        $('.icon-clear').toggleClass('clear');
        $('.logo-nav').toggleClass('hidden');
        $('.logo-footer').toggleClass('block-logo');
    })

    $('.content').slideUp();

    $('.accordion').on('click', function (event) {
        event.preventDefault();
        $(this).next().slideToggle();
        $('.accordion').animate({ scrollTop: $(this).offset().top }, 400);
        $(this).toggleClass('color-red');
        $(this).find('i').toggleClass('rotate-180');
    });

    $('.accordion-wrapper').mouseover(function () {
        $('.accordion-wrapper').children('.accordion-item').toggleClass('hover-gray');
    })

    $('.title-1').on('click', function (event) {
        $('.title-1').addClass('border-orange');
        $('.text-1').css('display', 'block');
        $('.tab-1').css('display', 'block');
        $('.title-2').removeClass('border-orange');
        $('.text-2').css('display', 'none');
        $('.tab-2').css('display', 'none');
        $('.title-3').removeClass('border-orange');
        $('.text-3').css('display', 'none');
        $('.tab-3').css('display', 'none');
    })
    $('.title-2').on('click', function (event) {
        $('.title-2').addClass('border-orange');
        $('.text-2').css('display', 'block');
        $('.tab-2').css('display', 'block');
        $('.title-1').removeClass('border-orange');
        $('.text-1').css('display', 'none');
        $('.tab-1').css('display', 'none');
        $('.title-3').removeClass('border-orange');
        $('.text-3').css('display', 'none');
        $('.tab-3').css('display', 'none');
    })
    $('.title-3').on('click', function (event) {
        $('.title-3').addClass('border-orange');
        $('.text-3').css('display', 'block');
        $('.tab-3').css('display', 'block');
        $('.title-2').removeClass('border-orange');
        $('.text-2').css('display', 'none');
        $('.tab-2').css('display', 'none');
        $('.title-1').removeClass('border-orange');
        $('.text-1').css('display', 'none');
        $('.tab-1').css('display', 'none');
    })

})