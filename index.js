"use strict";

// hide scroll bar when on top of the page
window.addEventListener("scroll", function () {
    const body = document.querySelector("body");
    if (window.scrollY === 0) {
        body.classList.add("hide-scrollbar");
    } else {
        body.classList.remove("hide-scrollbar");
    }
});

// company logo carousel using flickity
let logoCarousel = document.querySelector(".main-carousel");

let flkty = new Flickity(logoCarousel, {
    contain: true,
    autoPlay: 1500,
    freeScroll: true,
    prevNextButtons: true,
    pageDots: true,
    wrapAround: true,
    adaptiveHeight: true,
});
