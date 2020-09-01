import $ from "jquery";

"use strict";

$(document).ready(function() {
    $('.site-burger').click(function(event) {
        $('.site-burger__slice-top').toggleClass('site-burger__slice-top--active');
        $('.site-burger__slice-center').toggleClass('site-burger__slice-center--active');
        $('.site-burger__slice-bot').toggleClass('site-burger__slice-bot--active');
        $('.header__left-wrapper').toggleClass('header__left-wrapper--active');
        $('.header__user-logout').toggleClass('header__user-logout--active'); 
    });
});

