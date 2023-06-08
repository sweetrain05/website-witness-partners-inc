function Router() {
    this.routes = {};
}

Router.prototype.addRoute = function (path, templateURL) {
    this.routes[path] = templateURL;
};

Router.prototype.loadContent = function (templateURL) {
    fetch(templateURL)
        .then((response) => response.text())
        .then((htmlContent) => {
            const mainContent = document.getElementById("main-content");
            mainContent.innerHTML = htmlContent;
        })
        .catch((error) => {
            console.error("Error loading content:", error);
            const mainContent = document.getElementById("main-content");
            mainContent.innerHTML = "<h1>Error loading content</h1>";
        });
};

Router.prototype.start = function () {
    const handleRouteChange = () => {
        const path = location.hash.slice(1);
        const templateURL = this.routes[path];
        if (templateURL) {
            this.loadContent(templateURL);
        } else {
            console.error("Invalid route:", path);
        }
    };

    window.addEventListener("hashchange", handleRouteChange);
    window.addEventListener("DOMContentLoaded", handleRouteChange);
};
