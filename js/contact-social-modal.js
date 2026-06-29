/* 社群籌備中提示框 */
const socialLinks = document.querySelectorAll(".contact-social__link");
const socialModal = document.getElementById("social-modal");

if (socialModal && socialLinks.length > 0) {
    const socialModalName = document.getElementById("social-modal-name");
    const socialModalOverlay = socialModal.querySelector(".social-modal__overlay");
    const socialModalClose = socialModal.querySelector(".social-modal__close");
    const socialModalBtn = socialModal.querySelector(".social-modal__btn");


    function openSocialModal(platformName) {
        socialModalName.textContent = platformName;
        socialModal.classList.add("is-open");
        socialModal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    }

    function closeSocialModal() {
        socialModal.classList.remove("is-open");
        socialModal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }

    socialLinks.forEach((link) => {
        link.addEventListener("click", () => {
            openSocialModal(link.dataset.social);
        });
    });

    socialModalOverlay.addEventListener("click", closeSocialModal);
    socialModalClose.addEventListener("click", closeSocialModal);
    socialModalBtn.addEventListener("click", closeSocialModal);

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && socialModal.classList.contains("is-open")) {
            closeSocialModal();
        }
    });
}