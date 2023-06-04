"use strict";

// hide scroll bar when on top of the page
window.addEventListener("scroll", function () {
    var body = document.querySelector("body");
    if (window.scrollY === 0) {
        body.classList.add("hide-scrollbar");
    } else {
        body.classList.remove("hide-scrollbar");
    }
});
