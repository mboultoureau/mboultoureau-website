/**
 * @author Mathis Boultoureau
 * @see https://github.com/mboultoureau/mboultoureau
 */

/* TRANSITION ENTRE LES PAGES */
const swup = new Swup({
    plugins: [
        new SwupStripesOverlayTheme({
            duration: 800,
            color1: "#00F7F7"
        })
    ]
});

/* HEADER BOX SHADOW */
function updateScroll() {
    const SCROLL_HEIGHT = 50;

    if (
        document.body.scrollTop > SCROLL_HEIGHT ||
        document.documentElement.scrollTop > SCROLL_HEIGHT
    ) {
        document.querySelector("body > header").classList.remove("at-the-top");
    } else {
        document.querySelector("body > header").classList.add("at-the-top");
    }
}
window.addEventListener("scroll", updateScroll);

/* MENU */
const nav = document.querySelector("body > header > nav");

document.querySelector("body > header > a").addEventListener("click", () => {
    if (nav.classList.contains("displayed")) {
        nav.classList.remove("displayed");
    } else {
        nav.classList.add("displayed");
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 600 && nav.classList.contains("displayed")) {
        nav.classList.remove("displayed");
    }
});

document.querySelectorAll("body > header > nav a").forEach(e =>
    e.addEventListener("click", () => {
        if (nav.classList.contains("displayed")) {
            setTimeout(() => nav.classList.remove("displayed"), 400);
        }
    })
);

/* BIRDS ANIMATION */
function birds() {
    if (window.location.pathname === "/") {
        VANTA.BIRDS({
            el: "#about-me",
            mouseControls: true,
            touchControls: true,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            backgroundColor: "#f7f9fc",
            quantity: 2.3
        });
    }
}

/* LINKS */
let anchors = [];

function clickOnLink(e) {
    let id = "#" + this.getAttribute("href").split("#")[1];

    if (window.location.pathname !== "/") {
        setTimeout(() => {
            document.querySelector(id).scrollIntoView({
                behavior: "smooth"
            });
        }, 1000);
    } else {
        document.querySelector(id).scrollIntoView({
            behavior: "smooth"
        });
    }
}

function createLinkListener() {
    // Delete event listener
    anchors.forEach(anchor => {
        anchor.removeEventListener("click", clickOnLink);
    });

    // Create event listener
    document.querySelectorAll('a[href^="/#"]').forEach(anchor => {
        anchor.addEventListener("click", clickOnLink);

        anchors.push(anchor);
    });

    let project = document.querySelector('a[href="/projets/"]');
    anchors.push(project);

    project.addEventListener("click", e => {
        if (window.location.pathname.startsWith("/projets/")) {
            window.scrollTo(0, 0);
        } else {
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 1000);
        }
    });
}

/* PROJECTS PAGE */
// Flèches
let leftArrow, rightArrow;

function tooltipsArrow() {
    if (leftArrow !== undefined && rightArrow !== undefined) {
        leftArrow.removeEventListener("click", next);
        rightArrow.removeEventListener("click", previous);
    }

    if (window.location.pathname.startsWith("/projets/")) {
        // Ajout des flèches
        leftArrow = document.querySelector(".next");
        rightArrow = document.querySelector(".previous");

        leftArrow.addEventListener("click", next);
        rightArrow.addEventListener("click", previous);
    }
}

function next(e) {
    e.preventDefault();

    let tooltips = document.querySelector(".tooltips div");
    tooltips.scroll(tooltips.scrollLeft + window.innerWidth - 200, 0);
}

function previous(e) {
    e.preventDefault();

    let tooltips = document.querySelector(".tooltips div");
    tooltips.scroll(tooltips.scrollLeft - window.innerWidth + 200, 0);
}

// Projets tooltips

let tooltips = [];
let projects = [];
let tooltipsSelected = [];

function projectsTooltips() {
    projects = [];
    tooltips.forEach(tooltip => {
        tooltip.removeEventListener("click", clickOnTooltip);
    });

    if (window.location.pathname.startsWith("/projets/")) {
        projects = document.querySelectorAll(".projects-content article");
        tooltips = document.querySelectorAll(".tooltips div a");

        tooltips.forEach(tooltip => {
            tooltip.addEventListener("click", clickOnTooltip);
        });
    }
}

function clickOnTooltip(e) {
    e.preventDefault();

    if (e.target.classList.contains("selected")) {
        tooltipsSelected.splice(
            tooltipsSelected.indexOf(e.target.textContent),
            1
        );
        e.target.classList.remove("selected");
    } else {
        tooltipsSelected.push(e.target.textContent);
        e.target.classList.add("selected");
    }

    projects.forEach(project => {
        projectTooltips = project.querySelectorAll("ul li");
        let displayed = tooltipsSelected.every(tooltip => {
            let find = false;
            let index = 0;

            while (!find && index < projectTooltips.length) {
                if (projectTooltips[index].textContent === tooltip) {
                    find = true;
                } else {
                    index++;
                }
            }

            return find;
        });

        if (displayed) {
            project.classList.remove("hidden");
        } else {
            project.classList.add("hidden");
        }
    });
}

/* SWUP CHANGE PAGE */
swup.on("contentReplaced", () => {
    createLinkListener();
    birds();
    tooltipsArrow();
    projectsTooltips();
});

/* FIRST TIME */
updateScroll();
birds();
createLinkListener();
tooltipsArrow();
projectsTooltips();
