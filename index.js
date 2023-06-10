/**
A Corporate Website for Witness Creative Inc.

Created by Dan Bi Choi, a frontend developer. 

📗 Last updated date: June 10th, 2023
*/
// --------------------------------------------------------
// --------------------------------------------------------
"use strict";

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
// 👉 Carousel of company logos using swiper.js starts here

// Images and URLs for the slides.
const slideData = [
    {
        name: "Kairos Investment",
        imgSrc: "./src/logo/kairosInvestment.svg",
        url: "https://www.kairos.co.kr",
    },
    {
        name: "Strategic Ventures",
        imgSrc: "./src/logo/SVstrategicVentrues1.svg",
        url: "http://svrglobal.com",
    },
    {
        name: "NYSERDA",
        imgSrc: "./src/logo/NYStatelogo.svg",
        url: "https://www.nyserda.ny.gov",
    },
    {
        name: "SOSV",
        imgSrc: "./src/logo/SOSVlogo.svg",
        url: "https://sosv.com",
    },
    {
        name: "USRuralDepartmentPACE",
        imgSrc: "./src/logo/USRuralDepartmentPACE.svg",
        url: "https://www.rd.usda.gov/programs-services/electric-programs/powering-affordable-clean-energy-pace-program",
    },
    {
        name: "breezm",
        imgSrc: "./src/logo/breezm.svg",
        url: "https://www.breezmeyewear.com/",
    },
    {
        name: "eia",
        imgSrc: "./src/logo/eia.svg",
        url: "https://www.eia.gov/",
    },
    {
        name: "gdi",
        imgSrc: "./src/logo/gdi.svg",
        url: "https://www.gdinrg.com/",
    },
    {
        name: "jellatech",
        imgSrc: "./src/logo/jellatech.svg",
        url: "https://www.jellatech.com/",
    },
    {
        name: "kolmar1",
        imgSrc: "./src/logo/kolmar1.svg",
        url: "https://www.kolmar.co.kr/eng/",
    },
    {
        name: "modernmeadow",
        imgSrc: "./src/logo/modernmeadow.svg",
        url: "https://www.modernmeadow.com/",
    },
    {
        name: "newharvestlogo",
        imgSrc: "./src/logo/newharvestlogo.svg",
        url: "https://new-harvest.org/",
    },
    {
        name: "nybest1",
        imgSrc: "./src/logo/nybest1.svg",
        url: "https://ny-best.org/",
    },
    {
        name: "plyoneer",
        imgSrc: "./src/logo/plyoneer.svg",
        url: "http://www.zeeing.io/",
    },
    {
        name: "PowertoHydrogen1",
        imgSrc: "./src/logo/PowertoHydrogen1.svg",
        url: "https://power-h2.com/",
    },
    {
        name: "seawith1",
        imgSrc: "./src/logo/seawith1.svg",
        url: "http://seawith.info/",
    },
    {
        name: "Unigen-Logo1",
        imgSrc: "./src/logo/Unigen-Logo1.svg",
        url: "https://unigen.net/",
    },
    {
        name: "IEExpo",
        imgSrc: "./src/logo/IEExpo.svg",
        url: "https://www.ie-expo.com/",
    },
    {
        name: "supplysidewest",
        imgSrc: "./src/logo/supplysidewest.svg",
        url: "https://west.supplysideshow.com/en/home.html",
    },
    {
        name: "incosmetics",
        imgSrc: "./src/logo/incosmetics.svg",
        url: "https://www.in-cosmetics.com",
    },
    {
        name: "newyorkchemists",
        imgSrc: "./src/logo/newyorkchemists.svg",
        url: "https://nyscc.org/",
    },
    {
        name: "cosmoprof",
        imgSrc: "./src/logo/cosmoprof.svg",
        url: "https://www.cosmoprofbeauty.com/",
    },
    {
        name: "aquatech",
        imgSrc: "./src/logo/aquatech.svg",
        url: "https://www.aquatechtrade.com/",
    },
    {
        name: "soliome",
        imgSrc: "./src/logo/soliome.svg",
        url: "https://soliome.com/",
    },
    {
        name: "livingfuture",
        imgSrc: "./src/logo/livingfuture.svg",
        url: "https://living-future.org/",
    },
];

// select an element where you want to place the carousel.
const swiperWrapper = document.querySelector(".swiper-wrapper");

// create slide data and attach to swiperWrapper based on given slideData above.
for (let i = 0; i < slideData.length; i++) {
    // create slide element which 'swiper-slide' class name (class name shouldn't be modified)
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide");

    // create anchor tag for each slide
    const anchor = document.createElement("a");
    anchor.href = slideData[i]["url"];
    anchor.target = "_blank";

    // insert svg logo data for each slide
    anchor.innerHTML = `
        <svg width="150" height="100">
        <image
            href="${slideData[i]["imgSrc"]}"
            width="100%"
            height="100%"
        />
        </svg>
    `;

    // Attach anchor element to the slide
    slide.appendChild(anchor);

    // Attach slide element to swiperWrapper
    swiperWrapper.appendChild(slide);
}

// Make a swiper based on Swiper.js guidelines
const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    centeredSlides: true,
    effect: "slide",
    speed: 1000,
    updateOnWindowResize: true,

    autoplay: {
        delay: 0,
        pauseOnMouseEnter: true,
    },

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // Default parameters
    slidesPerView: 3,
    spaceBetween: 80,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 480px
        480: {
            slidesPerView: 3,
            spaceBetween: 80,
        },
        // when window width is >= 767px
        767: {
            slidesPerView: 4,
            spaceBetween: 80,
        },
        // when window width is >= 1024px
        1024: {
            slidesPerView: 6,
            spaceBetween: 150,
        },

        // when window width is >= 1700px
        1700: {
            slidesPerView: 7,
            spaceBetween: 200,
        },
    },
});
// activate carousel autoplay when window is resized
window.addEventListener("resize", () => {
    swiper.autoplay.start();
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
