/* nav */
const navToggle = document.querySelector(".site-nav-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");

if (navToggle && siteNav) {
    navToggle.addEventListener("click", () => {
        navToggle.classList.toggle("is-open");
        siteNav.classList.toggle("is-open");

        const isOpen = siteNav.classList.contains("is-open");

        navToggle.setAttribute(
            "aria-label",
            isOpen ? "關閉選單" : "開啟選單"
        );

        document.body.style.overflow = isOpen ? "hidden" : "";
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navToggle.classList.remove("is-open");
            siteNav.classList.remove("is-open");
            document.body.style.overflow = "";
            navToggle.setAttribute("aria-label", "開啟選單");
        });
    });
}

/* 電子報訂閱 */
const newsletterModal = document.getElementById("newsletter-modal");

if (newsletterModal) {
    const newsletterForm = document.querySelector(".site-footer__form");
    const newsletterInput = document.querySelector(".site-footer__input");

    const newsletterModalOverlay = newsletterModal.querySelector(".newsletter-modal__overlay");
    const newsletterModalClose = newsletterModal.querySelector(".newsletter-modal__close");
    const newsletterModalBtn = newsletterModal.querySelector(".newsletter-modal__btn");

    function openNewsletterModal() {
        newsletterModal.classList.add("is-open");
        newsletterModal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    }

    function closeNewsletterModal() {
        newsletterModal.classList.remove("is-open");
        newsletterModal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }

    if (newsletterForm) {
        newsletterForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const email = newsletterInput.value.trim();

            if (!email) {
                alert("請輸入電子郵件！");
                return;
            }

            openNewsletterModal();
            newsletterForm.reset();
        });
    }

    newsletterModalOverlay.addEventListener("click", closeNewsletterModal);
    newsletterModalClose.addEventListener("click", closeNewsletterModal);
    newsletterModalBtn.addEventListener("click", closeNewsletterModal);

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && newsletterModal.classList.contains("is-open")) {
            closeNewsletterModal();
        }
    });
}