var buttonMobileheadr = document.querySelector(".header__menu_js");
var buttonCloseMobileheadr = document.querySelector(".mobile-header__button-close_js");
var mobileHeader = document.querySelector(".mobile-header");

buttonMobileheadr.addEventListener("click", function (){
    mobileHeader.classList.add("mobile-header_open");

});

buttonCloseMobileheadr.addEventListener("click", function (){
     mobileHeader.classList.remove("mobile-header_open");

});
