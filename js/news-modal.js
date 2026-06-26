/* 最新消息 Modal */

const newsModal = document.getElementById("news-modal");

if (newsModal) {
    const newsCards = document.querySelectorAll(".news-card");

    const newsModalOverlay = newsModal.querySelector(".news-modal__overlay");
    const newsModalClose = newsModal.querySelector(".news-modal__close");

    const newsModalImage = document.getElementById("news-modal-image");
    const newsModalTitle = document.getElementById("news-modal-title");
    const newsModalCategory = document.getElementById("news-modal-category");
    const newsModalDate = document.getElementById("news-modal-date");
    const newsModalContent = document.getElementById("news-modal-content");

    function openNewsModal(newsId) {
        const news = newsData[newsId];

        if (!news) {
            console.warn(`找不到消息資料：${newsId}`);
            return;
        }

        newsModalImage.src = news.heroImage;
        newsModalImage.alt = news.imageAlt;

        newsModalTitle.textContent = news.title;
        newsModalCategory.textContent = news.category;
        newsModalDate.textContent = news.date;
        newsModalContent.innerHTML = news.content;

        newsModal.classList.add("is-open");
        newsModal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    }

    function closeNewsModal() {
        newsModal.classList.remove("is-open");
        newsModal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }

    newsCards.forEach((card) => {
        card.addEventListener("click", () => {
            const newsId = card.dataset.news;
            openNewsModal(newsId);
        });

        card.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();

                const newsId = card.dataset.news;
                openNewsModal(newsId);
            }
        });
    });

    newsModalOverlay.addEventListener("click", closeNewsModal);
    newsModalClose.addEventListener("click", closeNewsModal);

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && newsModal.classList.contains("is-open")) {
            closeNewsModal();
        }
    });
}