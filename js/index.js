import Home from "./components/Home.js";
import Projects from "./components/Projects.js";

const app = document.getElementById("app");
// app.innerHTML = Home();

buildApp();

function buildApp() {
    navHome();

    renderHome();
    renderProjects();
}

function renderHome() {
    app.innerHTML = Home();

    renderProjects()
}

function navHome() {
    const homeNavBtn = document.querySelector(".home");

    homeNavBtn.addEventListener("click", () =>{
        renderHome();
    });
}

function renderProjects() {
    const projectsMinBtn = document.querySelector(".min-btn");

    projectsMinBtn.addEventListener("click", () => {
        const projectsElem = document.getElementById("projects");
        const headerElem = document.getElementById("header");
        const contactElem = document.getElementById("contact");

        projectsElem.classList.remove("animate__zoomIn");
        projectsElem.classList.add("animate__zoomOutDown");

        headerElem.classList.remove("animate__zoomIn");
        headerElem.classList.add("animate__zoomOutDown");
        headerElem.classList.add("animate__delay-1s");

        contactElem.classList.remove("animate__zoomIn");
        contactElem.classList.add("animate__zoomOutDown");
        contactElem.classList.add("animate__delay-2s");

        setTimeout(() => {
            projectsElem.classList.remove("flex");
            projectsElem.classList.add("none");
            projectsElem.classList.remove("animate__zoomOutDown");

            headerElem.classList.remove("flex");
            headerElem.classList.add("none");
            headerElem.classList.remove("animate__zoomOutDown");

            contactElem.classList.remove("flex");
            contactElem.classList.add("none");
            contactElem.classList.remove("animate__zoomOutDown");


            app.innerHTML = Projects();
            const readMoreBtn = document.getElementById("read-more-btn")
            readMore(readMoreBtn);
            console.log(readMoreBtn);
        }, 3250);
    });
}

function readMore(readMoreBtn) {

    readMoreBtn.addEventListener("click", () => {
        const dots = document.getElementById("dots");
        const moreText = document.getElementById("more");

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            readMoreBtn.innerHTML = "READ MORE";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            readMoreBtn.innerHTML = "READ LESS";
            moreText.style.display = "inline";
        }
    });
}