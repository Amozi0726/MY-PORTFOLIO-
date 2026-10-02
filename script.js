// ============================================
// MOBILE NAVIGATION
// ============================================

const menuToggle =
    document.getElementById("menuToggle");

const nav =
    document.getElementById("nav");

const navLinks =
    document.querySelectorAll(".nav-link");


menuToggle.addEventListener("click", () => {

    nav.classList.toggle("open");

});


// Close menu when a navigation link is clicked

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

    });

});


// ============================================
// HEADER SHADOW ON SCROLL
// ============================================

const header =
    document.getElementById("header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


// ============================================
// ACTIVE NAVIGATION LINK
// ============================================

const sections =
    document.querySelectorAll("section[id]");


function updateActiveLink() {

    const scrollPosition =
        window.scrollY + 150;


    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;

        const sectionId =
            section.getAttribute("id");


        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            navLinks.forEach((link) => {

                link.classList.remove("active");

            });


            const activeLink =
                document.querySelector(
                    `.nav-link[href="#${sectionId}"]`
                );


            if (activeLink) {

                activeLink.classList.add("active");

            }

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveLink
);


// ============================================
// SCROLL REVEAL ANIMATION
// ============================================

const revealElements =
    document.querySelectorAll(
        ".section-header, .about-grid, .skill, .database-grid, .project, .timeline-item, .contact-box"
    );


revealElements.forEach((element) => {

    element.classList.add("reveal");

});


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach((element) => {

    observer.observe(element);

});


// ============================================
// CURRENT YEAR
// ============================================

const year =
    document.getElementById("year");


year.textContent =
    new Date().getFullYear();


// ============================================
// SMOOTH SCROLL FALLBACK
// ============================================

document.querySelectorAll(
    'a[href^="#"]'
).forEach((link) => {

    link.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");

        const target =
            document.querySelector(targetId);


        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});