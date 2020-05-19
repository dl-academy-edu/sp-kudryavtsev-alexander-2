var popup = document.querySelector(".modal-bg_js");
var buttonOpen = document.querySelector(".pourple-link_js");
var buttonClose = document.querySelector(".modal-close_js");
var input = document.querySelector(".form-input_js");

buttonOpen.addEventListener("click", function (){
popup.classList.remove("modal-bg_close");
input.focus();
});

buttonClose.addEventListener("click", function (){
popup.classList.add("modal-bg_close");
buttonOpen.focus();
});

window.addEventListener("keydown", function (event) {
    if(!popup.classList.contains("modal-bg_close") && event.code === "Escape") {
        popup.classList.add("modal-bg_close");
        buttonOpen.focus();
    }
})

// mobile header

var buttonMobileheadr = document.querySelector(".header_menu_js");
var buttonCloseMobileheadr = document.querySelector(".mobile-header__button-close_js");
var mobileHeader = document.querySelector(".mobile-header");

buttonMobileheadr.addEventListener("click", function (){
    mobile-header.classList.add("mobile-header_open");

});

buttonCloseMobileheadr.addEventListener("click", function (){
    mobile-header.classList.remove("mobile-header_open");

});


  