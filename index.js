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
    // contain: true,
    autoPlay: 1500,
    freeScroll: true,
    prevNextButtons: true,
    pageDots: true,
    wrapAround: true,
    // adaptiveHeight: true,
});

// links for icons on footer (open in new window when clicked)
const links = [
    "https://www.facebook.com/witnesspartners.us",
    "https://www.instagram.com/witness_creative/",
    "https://www.linkedin.com/company/witness-creative-partners-inc/",
];

const linkedIcons = document.querySelectorAll(".links");
linkedIcons.forEach((icon, i) => {
    icon.addEventListener("click", () => {
        window.open(links[i], "_blank");
    });
});

// clear e-mail input area when it is focused & let original value appear when unfocused
const emailInput = document.getElementById("mce-EMAIL");

emailInput.addEventListener("focus", function () {
    this.value = "";
});
emailInput.addEventListener("blur", function () {
    this.value = "enter you email here";
});
