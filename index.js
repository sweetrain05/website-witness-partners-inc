"use strict";

// --------------------------------------------------------
// 👉 hide scroll bar when on top of the page
window.addEventListener("scroll", () => {
    const body = document.querySelector("body");
    if (window.scrollY === 0) {
        body.classList.add("hide-scrollbar");
    } else {
        body.classList.remove("hide-scrollbar");
    }
});

// --------------------------------------------------------
// 👉 Reload the page when company logo is clicked
const reloadBtn = document.querySelector(".home-reload");

reloadBtn.addEventListener("click", function () {
    location.reload();
});

// --------------------------------------------------------
// 👉 Carousel of company logos using swiper.js starts here
const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    centeredSlides: true,
    effect: "slide",
    speed: 500,
    updateOnWindowResize: true,

    autoplay: {
        delay: 700,
        pauseOnMouseEnter: true,
    },

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 100,
        },
        // when window width is >= 767px
        767: {
            slidesPerView: 3,
            spaceBetween: 300,
        },
        // when window width is >= 1024px
        1024: {
            slidesPerView: 3,
            spaceBetween: 300,
        },

        // when window width is >= 1700px
        1700: {
            slidesPerView: 4,
            spaceBetween: 300,
        },
    },
});
// activate carousel autoplay when window is resized
window.addEventListener("resize", () => {
    swiper.autoplay.start();
});

// --------------------------------------------------------
// 👉 links for icons on menu and footer(open in new window when clicked)
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

// --------------------------------------------------------
// 👉 clear e-mail input area when it is focused & let original value appear when nothing is written.
const emailInput = document.getElementById("mce-EMAIL");
const originalValue = emailInput.value;

// delete the existing value when user clicks on the input area.
emailInput.addEventListener("focus", () => {
    if (emailInput.value === originalValue) {
        emailInput.value = "";
    }
});

// show the original value only when nothing is written on the input.
emailInput.addEventListener("blur", () => {
    if (emailInput.value === "") {
        emailInput.value = originalValue;
    }
});

// --------------------------------------------------------
// 👉 clear contact form input area when it is focused & let original value appear when unfocused
const formInputs = document.querySelectorAll(".form_input");
formInputs.forEach((inputArea) => {
    const originalValue = inputArea.value;

    inputArea.addEventListener("focus", () => {
        if (inputArea.value === originalValue) {
            inputArea.value = "";
        }
    });
    inputArea.addEventListener("blur", () => {
        if (inputArea.value === "") {
            inputArea.value = originalValue;
        }
    });
});

// --------------------------------------------------------
// 👉 Apply change in header design according to screen size
// when window is resized or loaded, get all new btns and their locations
window.addEventListener("resize", reloadHeader);
window.addEventListener("load", reloadHeader);
function reloadHeader() {
    // get current screen width size
    function getCurrentScreenWidth() {
        const screenWidth =
            window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth;
        return screenWidth;
    }

    // function to show different designs based on passed on screen width size
    function headerDesignHandler(screenWidth) {
        // select the area where you want your html code to change depending on screen size
        const headerRight = document.querySelector(".header_rightside");

        // switch to different html code based on screen width.
        if (screenWidth < 767) {
            headerRight.innerHTML = `
            <div class="hamburger-menu menu-toggle">
                <svg width="25" height="25">
                    <image
                        href="./src/svg/menubar.svg"
                        width="100%"
                        height="100%"
                    />
                </svg>
            </div>
            `;
        } else {
            headerRight.innerHTML = `
            <div class="contact-menu goToContact">contact</div>
            `;
        }
    }

    // when screen is resized or loaded, execute headerDesignHandler function.
    // This will show either 'hanburger menu' or 'contact text' depending on current screen size.
    headerDesignHandler(getCurrentScreenWidth());

    // Now, let's add toggle effect to hamburger menu.
    // select all the elements that is related to toggle
    const toggleBtns = document.querySelectorAll(".menu-toggle");

    // select the element that should show up when toggled
    const menuOverlay = document.querySelector(".menu_container_overlay");

    // when any toggle element is clicked, it will appear/disappear
    toggleBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            if (menuOverlay.style.display === "flex") {
                menuOverlay.style.display = "none";
            } else {
                menuOverlay.style.display = "flex";
            }
        });
    });
}

// --------------------------------------------------------
// 👉 scroll down element animation effects
document.addEventListener("DOMContentLoaded", () => {
    // select all elements that has 'animate' class
    const animatedElements = document.querySelectorAll(".animate");
    // get current window's content area's height
    const windowHeight = window.innerHeight;

    function addAnimationEffect() {
        for (let i = 0; i < animatedElements.length; i++) {
            // loop the activity for each element that has 'onScroll' class name.
            const element = animatedElements[i];

            // get y-coordiate of the user
            const positionFromTop = element.getBoundingClientRect().top;

            // if y-coordinate and window height equal to each other,
            // add appropriate class name to the element, depending on which animation is needed.
            if (positionFromTop - windowHeight <= 0) {
                element.classList.add("appear");
            }
        }
    }

    // Call addAnimationEffect on page scroll and on page load
    window.addEventListener("scroll", addAnimationEffect);
    window.addEventListener("load", addAnimationEffect);
});

// --------------------------------------------------------
// // 👉 Scroll down to contact form when 'contact us' elements are clicked

// when window is resized or loaded, get all the new btns and their locations
window.addEventListener("resize", getAllBtns);
window.addEventListener("load", getAllBtns);
function getAllBtns() {
    // select all the elements that will lead the user to form location
    const goToContactBtns = document.querySelectorAll(".goToContact");

    // when any elements with .goToContact class is clicked, it will lead to current location of the contact form.
    goToContactBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({
                top: getNewLocation(),
                behavior: "smooth",
            });

            // close the menu overlay, if it is displayed
            const menuOverlay = document.querySelector(
                ".menu_container_overlay"
            );
            if (menuOverlay.style.display === "flex") {
                menuOverlay.style.display = "none";
            }
        });
    });

    // select form by its class
    const contactForm = document.querySelector(".contactUs_formSub");

    // function to get current location of contactForm.
    function getNewLocation() {
        return contactForm.getBoundingClientRect().top + window.pageYOffset;
    }
}

// --------------------------------------------------------
// // 👉 Scroll to very top button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

let isScrolling;
window.addEventListener("scroll", function () {
    clearTimeout(isScrolling);

    scrollToTopBtn.classList.add("show");

    isScrolling = setTimeout(function () {
        scrollToTopBtn.classList.remove("show");
    }, 500);
});

scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
