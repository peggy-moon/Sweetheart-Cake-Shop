/* 聯絡表單寄到gmail */
const contactForm = document.getElementById("contact-form");

const contactModal = document.getElementById("contact-modal");

if (contactForm && contactModal) {
    const submitBtn = document.querySelector(".contact-form__btn");

    const contactModalOverlay = contactModal.querySelector(".contact-modal__overlay");
    const contactModalClose = contactModal.querySelector(".contact-modal__close");
    const contactModalBtn = contactModal.querySelector(".contact-modal__btn");

    function openContactModal() {
        contactModal.classList.add("is-open");
        contactModal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    }

    function closeContactModal() {
        contactModal.classList.remove("is-open");
        contactModal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }

    contactModalOverlay.addEventListener("click", closeContactModal);
    contactModalClose.addEventListener("click", closeContactModal);
    contactModalBtn.addEventListener("click", closeContactModal);

    emailjs.init({
        publicKey: "NvI9ATpY5bnvJLvzR",

    });

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        submitBtn.disabled = true;
        submitBtn.innerHTML = "送出中...";

        emailjs
            .sendForm(
                "service_ptd27pf",
                "template_ciwnixd",
                contactForm
            )
            .then(() => {
                openContactModal();
                contactForm.reset();

                document.querySelector(".contact-form__count").textContent = "0 / 500";
            })
            .catch((error) => {
                console.error("寄送失敗：", error);
                alert("送出失敗，請稍後再試。");
            })
            .finally(() => {
                submitBtn.disabled = false;

                submitBtn.innerHTML = `
        <i class="fa-solid fa-paper-plane"></i>
        送出訊息
        `;
            });
    });
}
