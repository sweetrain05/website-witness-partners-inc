const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    "/": "./components/home.html",
    "/contact": "./components/contact.html",
};

const handleLocation = async () => {
    const path = widnow.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("root").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
