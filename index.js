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
            slidesPerView: 4,
            spaceBetween: 300,
        },
    },
});
// activate carousel autoplay when window is resized
window.addEventListener("resize", () => {
    swiper.autoplay.start();
});

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

// 👉 clear e-mail input area when it is focused & let original value appear when unfocused
const emailInput = document.getElementById("mce-EMAIL");

emailInput.addEventListener("focus", () => {
    emailInput.value = "";
});
emailInput.addEventListener("blur", () => {
    emailInput.value = "enter you email here";
});

// 👉 show responsive menu bar when hamburger icon is clicked
// create class to handle toggle activity
class ToggleMenuHandler {
    constructor(element) {
        this.isActive = false;
        this.element = element;
    }

    // method to change current toggle status & css display style accordingly
    toggle() {
        if (this.isActive) {
            this.isActive = false;
            this.element.style.display = "none";
        } else {
            this.isActive = true;
            this.element.style.display = "flex";
        }
    }
}

// select all buttons that are involved in the toggle activity
const menuToggleBtns = document.querySelectorAll(".menu-toggle");

// select the element that you want to apply display toggle effect
const menuOverlay = document.querySelector(".menu_container_overlay");

// create instance of toggle menu
let toggleMenu = new ToggleMenuHandler(menuOverlay);

// create click event for each button that needs toggle feature
menuToggleBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        toggleMenu.toggle();
    });
});

// 👉 create click event listener on all elements that has contact-us router.
//     These will activate function changePageTo().
const contactusRouters = document.querySelectorAll(".contactus-router");
contactusRouters.forEach((router) => {
    router.addEventListener("click", (e) => {
        e.preventDefault();
        changePageTo("contactUs");
    });
});

// 👉 create a function that replaces contents of <main> tag based on given directory name.
function changePageTo(directory) {
    // Select all html tags with page class name.
    const pages = document.querySelectorAll(".page");
    // create a new hash map
    const hashMap = {};
    // Insert data into hashMap based on the <article> class names(index=1 on the list)
    // HashMap data format : { '2nd class name on article tag' : <article class="correspondingClass">...</article> }
    // HashMap data example : { home: <article class="home">...</article>, contactUS: <article class="contactus">...</article>}
    for (let i = 0; i < pages.length; i++) {
        let name = pages[i].classList[1];
        hashMap[name] = pages[i];
    }
    // select <main> tag and replace innerHTML with directory passed as parameter
    const mainPage = document.querySelector("main");
    mainPage.innerHTML = hashMap[directory].outerHTML;
}

// 👉 clear contact form input area when it is focused & let original value appear when unfocused
const formInput = document.querySelectorAll(".form_input");
formInput.forEach((inputArea) => {
    inputArea.addEventListener("focus", () => {
        inputArea.value = "";
    });
    inputArea.addEventListener("blur", () => {
        inputArea.value = "";
    });
});
