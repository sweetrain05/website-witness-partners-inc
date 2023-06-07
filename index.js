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

// 👉 Apply change in header design according to screen size
// detect screensize on page load and update header design
window.addEventListener("load", () => {
    const screenWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
    headerDesignHandler(screenWidth);
});

// detect screensize change and update header design
window.addEventListener("resize", () => {
    const screenWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
    headerDesignHandler(screenWidth);
});

// function to show different designs based on passed on screen width size
function headerDesignHandler(screenWidth) {
    const headerRight = document.querySelector(".header_rightside");

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
        <div class="contact-menu">contact</div>
        `;
    }
}

// const headers = document.querySelectorAll(".header_container");
// headers.forEach((header) => {
//     if (header.classList.contains("mobile")) {
//         console.log("mobile");
//     } else if (header.classList.contains("desktop")) {
//         console.log("desktop");
//     }
// });

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

// 👉 create click event listener on all elements that has router classnames.
//     These will activate function changePageTo().
// Router to contact us page
const contactusRouters = document.querySelectorAll(".contactus-router");
contactusRouters.forEach((router) => {
    router.addEventListener("click", (e) => {
        e.preventDefault();
        changePageTo("contactUs");
    });
});
// Router to home page
const homeRouters = document.querySelectorAll(".home-router");
homeRouters.forEach((router) => {
    router.addEventListener("click", (e) => {
        e.preventDefault();
        changePageTo("home");
    });
});

// 👉 create a function that replaces contents of <main> tag based on given directory name.
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

function changePageTo(directory) {
    // select <main> tag and replace innerHTML with directory passed as parameter
    const mainPage = document.querySelector("main");
    mainPage.innerHTML = hashMap[directory].outerHTML;
}

// // 👉 router version
// // Define routes and their corresponding actions
// const routes = [
//     { path: "", action: home },
//     { path: "/", action: home },
//     { path: "/contact", action: contact },
// ];

// // Function to render the view
// function render(directory, url) {
//     const mainPage = document.querySelector("main");
//     mainPage.innerHTML = directory;
// }

// // Functions to handle each route
// function home() {
//     render(hashMap[directory], "http://localhost:5500/#/");
// }

// function contact() {
//     render(hashMap[directory]);
// }

// // Function to handle routing based on the URL
// function router() {
//     const path = location.hash.slice(1); // Get the current URL path

//     // Find the corresponding action for the current route
//     const route = routes.find((route) => route.path === path);

//     if (route) {
//         route.action(); // Call the action associated with the route
//     } else {
//         render("<h1>404 - Page not found</h1>");
//     }
// }

// // Call the router function on page load and whenever the URL hash changes
// window.addEventListener("load", router);
// window.addEventListener("hashchange", router);

// window.addEventListener("DOMContentLoaded", function () {
//     const mainContent = document.querySelector("main");

//     fetch("./components/home.html")
//         .then((response) => response.text())
//         .then((html) => {
//             // Do something with the loaded HTML
//             mainContent.innerHTML = html;
//         })
//         .catch((error) => {
//             console.error("Error loading HTML file:", error);
//         });
// });
