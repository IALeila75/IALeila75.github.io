const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navMenu.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    // Fermer le menu après avoir cliqué
    // sur un lien

    const navLinks = navMenu.querySelectorAll(".nav-link");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}
