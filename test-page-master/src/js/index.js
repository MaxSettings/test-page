import "./import/modules";
import $ from "jquery";

"use strict";

$(".profile__links-item").on("click", function(e){
    $(".profile__links-item").removeClass("profile__links-item--active")
    $(this).toggleClass("profile__links-item--active")
});

